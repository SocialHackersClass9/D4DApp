const express = require("express");
const mysql = require("mysql");
const env = require("./env");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook");

const app = express();

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
      //clientID: process.env.GOOGLE_CLIENT_ID_INSTRUCTOR,
      //clientSecret: process.env.GOOGLE_CLIENT_SECRET_INSTRUCTOR,
      clientID:
        "550205679393-6d14j3qbga6bqasloo7f2qlvanko4nql.apps.googleusercontent.com",
      clientSecret: "sc5mj70In46fqYOzuxPaxXS5",
      callbackURL: "http://localhost:3001/auth/google/instructor/callback",
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

module.exports = router;
