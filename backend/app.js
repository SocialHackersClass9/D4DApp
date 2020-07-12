/////////////// REQUIREMENT //////////////////

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const mysql = require('mysql');
var morgan = require('morgan');
var cors = require('cors');
const fileUpload = require('express-fileupload');
const env = require('./env');
const { get } = require("./env");
env.get();

// ____________________________________________________________________ //

////////////// MYSQL_CONNECTION ///////////////

const db_password = process.env.DB_PASSWORD;

var con = mysql.createConnection({
    host: 'localhost',
    user: 'D4DApp',
    password: db_password,
    database: 'D4DApp'
});

// ____________________________________________________________________ //
//////////////// CONNECTING TO SQL DATABASE ///////////////

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
})

///////////// MIDLE_HANDLERS ///////////////

app.use(morgan('common'));
app.use(cors());
app.use(bodyParser.json());

// ____________________________________________________________________ //

const get_key = process.env.INSTRUCTORS_API_KEY_GET;
const post_key = process.env.INSTRUCTORS_API_KEY_POST;

/////////////// REGISTRATION /////////////////////

////////////// POST REQUESTS /////////////////

///////////// SENDING Instructors DATA TO DATABASE /////////////

app.post('/api/Instructors_registration/upload/data', function (req, resp, next) {

const { email, user_name, password, first_name, last_name, year_of_birth, region_id ,phone , education, gender, street, street_number ,location ,sport , zip, occupation, details, photo} = req.body;

    function insert (input_name_val , insert_name) {
        
        console.log('function have been called ', input_name_val , insert_name);

        let instructor_id = null ; 

            con.query(insert_name, [input_name_val], function (err, result) {
                if  (err) throw err;
                console.log('first have been inserted');

                var sql = 'SELECT id FROM instructors WHERE email = ? AND user_name = ?';
                con.query(sql, [email , user_name], function (err, result) {
                    if (err) throw err;
                    console.log('second have been inserted');
                    instructor_id = parseInt(result[0].id);
                    console.log(instructor_id);

                    var sql1 = "INSERT INTO instructors_locations (instructor_id, location_id) VALUES ?";
                    location.map(item => {
                    var locations = [[instructor_id,item]]
                    con.query(sql1, [locations], function (err, result) {
                        if (err) throw err;
                        console.log('thirth have been inserted');
                      });
                    })
            
                    var sql2 = "INSERT INTO instructors_sports (instructor_id, sport_id) VALUES ?";
                    sport.map(item => {
                    var sports = [[instructor_id,item]]
                    con.query(sql2, [sports], function (err, result) {
                        if (err) throw err;
                        console.log('4th have been inserted');

                      });
                    })
            
                });
        });

        console.log('database uploaded');
        resp.json({ msg: 'Registration have been complited' })
    }

    if (req.headers.key == post_key) {

        if(region_id.length != 0 ){
            var input_name_val1 = [[email, user_name, password, first_name, last_name, year_of_birth, region_id ,phone , education, gender, street, street_number, zip, occupation, details, photo]];
            var insert_name1 = "INSERT INTO instructors(email, user_name, password, first_name, last_name, year_of_birth, region_id ,phone , education, gender, street, street_number, zip, occupation, details, photo) VALUES ?";
            insert(input_name_val1, insert_name1);
        }else{
            var input_name_val2 = [[email, user_name, password, first_name, last_name, year_of_birth ,phone , education, gender, street, street_number, zip, occupation, details, photo]];
            var insert_name2 = "INSERT INTO instructors(email, user_name, password, first_name, last_name, year_of_birth ,phone , education, gender, street, street_number, zip, occupation, details, photo) VALUES ?";
            insert(input_name_val2, insert_name2)
        }

    }else {
        console.log('You dont allow to access the database')
        next();
    }

});

//______________________________SENDING TO DATABASE FINISHT_______________________________//

/////////////////////////////// PHOTO UPLOAD /////////////////////////////////////////

app.post('/api/Instructors_registration/upload/img', fileUpload(), (req, res) => {

    if (req.headers.key == post_key) {
        console.log('image uploaded');

        if (req.files === null) {
            return res.status(400).json({ msg: 'No file uploaded' });
        }

        const file = req.files.file;

        file.mv(`${__dirname}/Instructors_profile_images/${file.name}`, err => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
        });
    } else {
        console.log('You dont allow to access the database')
        next();
    }
});

//__________________________PHOTO UPLOADING FINIFHT____________________//
//___________________________POST REAUESTS FINISHT______________________________//

////////////////////////// GET REQUESTS /////////////////////////////
////////////////// GETTING USERNAMES AND EMAILS FROM Instructors_registration TABLE ////////////////////

app.get('/api/Instructors_registration/used', function (req, resp, next) {

    if (req.headers.key == get_key) {
        con.query("SELECT email,user_name FROM instructors", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            const emailuser = result;
            resp.json({ emailuser: emailuser })
            next();
        })
    }
    else {
        console.log('You dont allow to access the database')
        next();
    }
})

////////////////////////// GETTING ABVAILABLE SPORTS FROM sports TABLE /////////////////////////////

app.get('/api/Instructors_registration/sports', function (req, resp, next) {

    if (req.headers.key == get_key) {
        con.query("SELECT * FROM sports", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            const sports = result;
            resp.json({ sports : sports })
            next();
        })
    }
    else {
        console.log('You dont allow to access the database')
        next();
    }
})

//___________________________GETING AVAILABLE SPORTS FINISHT__________________//

////////////////////////// GETTING ABVAILABLE LOCATIONS FROM location TABLE /////////////////////////////

app.get('/api/Instructors_registration/locations', function (req, resp, next) {

    if (req.headers.key == get_key) {
        con.query("SELECT * FROM locations", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            const locations = result;
            resp.json({ locations : locations })
            next();
        })
    }
    else {
        console.log('You dont allow to access the database')
        next();
    }
})

//___________________________GETING AVAILABLE LOCAIONS FINISHT__________________//

////////////////////////// GETTING ABVAILABLE LOCATIONS FROM location TABLE /////////////////////////////

app.get('/api/Instructors_registration/regions', function (req, resp, next) {

    if (req.headers.key == get_key) {
        con.query("SELECT * FROM regions", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            const regions = result;
            resp.json({ regions : regions })
            next();
        })
    }
    else {
        console.log('You dont allow to access the database')
        next();
    }
})

//___________________________GETING AVAILABLE LOCAIONS FINISHT__________________//

//___________________________GET REQUESTS FINISHT__________________//
//___________________________REGISTRATION FINISHT___________________________//

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));