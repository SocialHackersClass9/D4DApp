const express = require("express");
const cors = require("cors");
const env = require("./env");
// const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const fileUpload = require("express-fileupload");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook");
const { request } = require("express");

let userProfile;

env.get();
const port = process.env.PORT;

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const mailtransport = nodemailer.createTransport({
  service: "SendGrid",
  auth: {
    user: process.env.SENDGRID_USER,
    pass: process.env.SENDGRID_PASSWORD,
  },
});
////////////////////////

/////////////////////////////////////
//mysql connection
let con = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
//////////////////////////////////
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
//authentication with google

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);
//////////////
//authentication with facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      profileFields: ["id", "displayName", "photos", "email", "gender"],
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

////////////////////////////////
//routes

app.get("/", (req, res) => {
  res.json({ greeting: "Hello World!" });
  console.log(req.headers);
});

app.get("/sports", (req, res) => {
  let sql = `SELECT id, name FROM sports`;
  con.query(sql, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});
app.get("/regions", (req, res) => {
  let sql = `SELECT id, name FROM regions`;
  con.query(sql, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});
function sqlQuery(instructors, res) {
  let loc_sql =
    "SELECT insl.instructor_id,insl.location_id ,loc.name,loc.region_id,r.name as rname FROM instructors_locations insl INNER JOIN locations loc ON insl.location_id=loc.id INNER JOIN regions r ON loc.region_id=r.id";
  let sprt_sql =
    "SELECT inss.instructor_id , inss.sport_id , s.name FROM instructors_sports inss INNER JOIN sports s ON inss.sport_id=s.id";

  con.query(loc_sql, (err, locations) => {
    if (err) console.log(err);
    con.query(sprt_sql, (err, sports) => {
      if (err) console.log(err);
      let result = [];
      instructors.forEach((instructor) => {
        locs = locations.filter((loc) => loc.instructor_id === instructor.id);
        instructor.locations = locs;
        sprts = sports.filter((sport) => sport.instructor_id === instructor.id);
        instructor.sports = sprts;
        result.push(instructor);
      });
      Promise.all(result)
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
    });
  });
}

app.get("/instructor/:id", (req, res) => {
  if (req.headers.key === "123") {
    let instructorQuery =
      "SELECT id,user_name,email,first_name,last_name,year_of_birth,gender,street,street_number,region_id,phone,education,photo,details FROM instructors WHERE id=?";
    con.query(instructorQuery, req.params.id, (err, instructors) => {
      if (err) console.log(err);
      sqlQuery(instructors, res);
    });
  }
});

app.get("/instructors", (req, res) => {
  if (req.headers.key === "123") {
    const inst_sql = `SELECT inst.id,inst.first_name,inst.last_name FROM instructors inst`;
    con.query(inst_sql, (err, instructors) => {
      if (err) console.log(err);
      sqlQuery(instructors, res);
    });
  }
});

app.post("/login", (req, res) => {
  const params = [req.body.email, req.body.password];
  sql = "SELECT user_name, email FROM students WHERE email=? AND password=?";
  con.query(sql, params, (err, result) => {
    if (err) console.log(err);
    if (result.length > 0) {
      const row = result[0];
      res.json({
        is_authenticated: true,
        user: {
          user_name: row.user_name,
          user_type: "student",
          email: row.email,
        },
      });
    } else {
      sql =
        "SELECT user_name, email FROM instructors WHERE email=? AND password=?";
      con.query(sql, params, (err, result) => {
        if (result.length > 0) {
          res.json({
            is_authenticated: true,
            user: {
              user_name: row.user_name,
              user_type: "instructor",
              email: row.email,
            },
          });
        } else {
          res.json({ is_authenticated: false });
        }
      });
    }
  });
});

//for stefanos

app.post("/contact", (req, res) => {
  const msg = {
    to: req.body.email,
    from: "admin@d4d.com",
    subject: "Message from D4DApp",
    text: req.body.message + " " + req.body.studentEmail,
  };
  async function send(msg) {
    try {
      const result = await mailtransport.sendMail(msg);
      res.json({ status: "success" });
    } catch (err) {
      console.log(err.message);
      res.json({ status: "failed" });
    }
  }
  send(msg);
});

//for marios
app.post("/register/student", (req, res) => {
  sql = `INSERT INTO students (user_name,email,password,first_name,last_name,phone,details) VALUES ("${req.body.user_name}","${req.body.email}","${req.body.password}","${req.body.first_name}","${req.body.last_name}","${req.body.phone}","${req.body.details}")`;
  con.query(sql, (err, result) => {
    res.json("done");
  });
});

app.post("/instructors/upload/data", function (req, resp, next) {
  const {
    email,
    user_name,
    password,
    first_name,
    last_name,
    year_of_birth,
    region_id,
    phone,
    education,
    gender,
    street,
    street_number,
    locations,
    sports,
    zip,
    occupation,
    details,
    photo,
  } = req.body;

  function insert(input_name_val, insert_name) {
    let instructor_id = null;
    con.query(insert_name, [input_name_val], function (err, result) {
      if (err) throw err;
      var sql = "SELECT id FROM instructors WHERE email = ? AND user_name = ?";
      con.query(sql, [email, user_name], function (err, result) {
        if (err) throw err;
        instructor_id = parseInt(result[0].id);
        var sql1 =
          "INSERT INTO instructors_locations (instructor_id, location_id) VALUES ?";
        locations.map((item) => {
          var locations = [[instructor_id, item]];
          con.query(sql1, [locations], function (err, result) {
            if (err) throw err;
          });
        });

        var sql2 =
          "INSERT INTO instructors_sports (instructor_id, sport_id) VALUES ?";
        sports.map((item) => {
          var sports = [[instructor_id, item]];
          con.query(sql2, [sports], function (err, result) {
            if (err) throw err;
          });
        });
      });
    });
    console.log("database uploaded");
    resp.json({ msg: "Registration have been complited" });
  }

  var input_name_val1;
  var insert_name1;

  if (region_id.length != 0) {
    var input_name_val1 = [
      [
        email,
        user_name,
        password,
        first_name,
        last_name,
        year_of_birth,
        region_id,
        phone,
        education,
        gender,
        street,
        street_number,
        zip,
        occupation,
        details,
        photo,
      ],
    ];
    var insert_name1 =
      "INSERT INTO instructors(email, user_name, password, first_name, last_name, year_of_birth, region_id ,phone , education, gender, street, street_number, zip, occupation, details, photo) VALUES ?";
    insert(input_name_val1, insert_name1);
  } else {
    var input_name_val2 = [
      [
        email,
        user_name,
        password,
        first_name,
        last_name,
        year_of_birth,
        phone,
        education,
        gender,
        street,
        street_number,
        zip,
        occupation,
        details,
        photo,
      ],
    ];
    var insert_name2 =
      "INSERT INTO instructors(email, user_name, password, first_name, last_name, year_of_birth ,phone , education, gender, street, street_number, zip, occupation, details, photo) VALUES ?";
    insert(input_name_val2, insert_name2);
  }
});

app.post("/instructors/upload/img", fileUpload(), (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/Instructors_profile_images/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    console.log("image uploaded");
  });
});

app.get("/instructors/used", function (req, resp, next) {
  con.query("SELECT email,user_name FROM instructors", function (
    err,
    result,
    fields
  ) {
    if (err) throw err;
    console.log(result);
    const emailuser = result;
    resp.json({ emailuser: emailuser });
    next();
  });
});

app.get("/locations", function (req, resp, next) {
  con.query("SELECT * FROM locations", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    const locations = result;
    resp.json(locations);
    next();
  });
});

////////////////////////
//google authentication

app.get(
  "/auth/google/student",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    callbackURL: "http://localhost:3001/auth/google/student/callback",
  })
);
app.get(
  "/auth/google/student/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    callbackURL: "http://localhost:3001/auth/google/student/callback",
  }),

  function (req, res) {
    let sql = `SELECT user_name FROM students WHERE email="${userProfile.emails[0].value}"`;
    con.query(sql, (err, result) => {
      if (err) console.log(err);
      if (result.length !== 0) {
        res.send("you are validated as student ...");
      } else {
        let sql2 = `INSERT INTO students (first_name,last_name,email,user_name) VALUES ("${userProfile.name.givenName}","${userProfile.name.familyName}","${userProfile.emails[0].value}","${userProfile.displayName}")`;
        con.query(sql2, (err, result) => {
          if (err) console.log(err);
          res.send("you are registered as student for this app");
        });
      }
    });
  }
);

app.get(
  "/auth/google/instructor",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    callbackURL: "http://localhost:3001/auth/google/instructor/callback",
  })
);
app.get(
  "/auth/google/instructor/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    callbackURL: "http://localhost:3001/auth/google/instructor/callback",
  }),
  function (req, res) {
    let sql = `SELECT user_name FROM instructors WHERE email="${userProfile.emails[0].value}"`;
    con.query(sql, (err, result) => {
      if (err) console.log(err);
      if (result.length !== 0) {
        res.send("you are validated as instructor ...");
      } else {
        let sql2 = `INSERT INTO instructors (first_name,last_name,email,user_name,gender,year_of_birth) VALUES ("${userProfile.name.givenName}","${userProfile.name.familyName}","${userProfile.emails[0].value}","${userProfile.displayName}","male",1990)`;
        con.query(sql2, (err, result) => {
          if (err) console.log(err);
          res.send("you are registered as instructor for this app");
        });
      }
    });
  }
);
app.get(
  "/auth/facebook/student",
  passport.authenticate("facebook", {
    scope: ["email"],
    callbackURL: "http://localhost:3001/auth/facebook/student/callback",
  })
);

app.get(
  "/auth/facebook/student/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/",
    callbackURL: "http://localhost:3001/auth/facebook/student/callback",
  }),
  function (req, res) {
    console.log(userProfile);
    let sql = `SELECT user_name FROM students WHERE email="${userProfile.emails[0].value}"`;
    con.query(sql, (err, result) => {
      if (err) console.log(err);
      if (result.length !== 0) {
        res.send("you are validated as student ...");
      } else {
        let sql2 = `INSERT INTO students (first_name,last_name,email,user_name) VALUES ("${userProfile.name.givenName}","${userProfile.name.familyName}","${userProfile.emails[0].value}","${userProfile.displayName}")`;
        con.query(sql2, (err, result) => {
          if (err) console.log(err);
          res.send("you are registered as student for this app");
        });
      }
    });
  }
);

app.get(
  "/auth/facebook/instructor",
  passport.authenticate("facebook", {
    scope: ["email"],
    callbackURL: "http://localhost:3001/auth/facebook/instructor/callback",
  })
);

app.get(
  "/auth/facebook/instructor/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/",
    callbackURL: "http://localhost:3001/auth/facebook/instructor/callback",
  }),
  function (req, res) {
    let sql = `SELECT user_name FROM instructors WHERE email="${userProfile.emails[0].value}"`;
    con.query(sql, (err, result) => {
      if (err) console.log(err);
      if (result.length !== 0) {
        res.send("you are validated as instructor ...");
      } else {
        let sql2 = `INSERT INTO instructors (first_name,last_name,email,user_name,gender,year_of_birth) VALUES ("${userProfile.name.givenName}","${userProfile.name.familyName}","${userProfile.emails[0].value}","${userProfile.displayName}","male",1990)`;
        con.query(sql2, (err, result) => {
          if (err) console.log(err);
          res.send("you are registered as instructor for this app");
        });
      }
    });
  }
);
////////////////////////

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
