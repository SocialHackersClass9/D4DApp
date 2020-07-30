const express = require("express");
const mysql = require("mysql");
const env = require("./env");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook");

const app = express();
env.get();
const router = express.Router();
app.use(cors());

let con = mysql.createConnection({
  host: "localhost",
  user: "sobhan",
  password: "Sobhan123!@#",
  database: "d4d",
});

let userProfile;

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
      clientID: process.env.GOOGLE_CLIENT_ID_STUDENT,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_STUDENT,

      callbackURL: "http://localhost:3001/auth/google/student/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
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

module.exports = router;
