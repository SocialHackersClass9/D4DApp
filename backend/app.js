const express = require("express");
const cors = require("cors");
const env = require("./env");
// const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

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
//
//authentication with google

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect success.
    res.send("you are validated");
  }
);

/////////////////////////////////////
//mysql connection
let con = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "d4d",
});
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
  sql = `SELECT user_name FROM students WHERE (email="${req.body.email}" AND password="${req.body.password}") OR (user_name="${req.body.email}" AND password="${req.body.password}")`;
  con.query(sql, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

// app.post('/register/instructor', (req, res) => {
//     let sql = `INSERT INTO instructors (first_name , last_name , year_of_birth , street_number , street , )`
// })

//for stefanos
app.post("/contact", (req, res) => {
  const msg = {
    to: "sobhanessifa@gmail.com",
    from: req.body.email,
    subject: req.body.subject,
    text: req.body.message,
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

////////////////////////

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
