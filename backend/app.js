const express = require('express')
const cors = require('cors')
const env = require('./env')
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const fileUpload = require('express-fileupload');
const { get } = require("./env");
env.get();

const port = process.env.PORT


const app = express()
app.use(cors())
app.use(bodyParser.json());

//for stefanos
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const mailtransport = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_PASSWORD
    }
})
//
let con = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'd4d'
    // database: 'D4DApp'
})


app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
    console.log(req.headers)

})

////////////////////////

app.get('/sports', (req, res) => {
    let sql = `SELECT id, name FROM sports`
    con.query(sql, (err, result) => {
        if (err) console.log(err);
        res.json(result)
    })
});
app.get('/regions', (req, res) => {
    let sql = `SELECT id, name FROM regions`
    con.query(sql, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
});
function sqlQuery(instructors, res) {
    let loc_sql = "SELECT insl.instructor_id,insl.location_id ,loc.name,loc.region_id,r.name as rname FROM instructors_locations insl INNER JOIN locations loc ON insl.location_id=loc.id INNER JOIN regions r ON loc.region_id=r.id"
    let sprt_sql = "SELECT inss.instructor_id , inss.sport_id , s.name FROM instructors_sports inss INNER JOIN sports s ON inss.sport_id=s.id"

    con.query(loc_sql, (err, locations) => {
        if (err) console.log(err);
        con.query(sprt_sql, (err, sports) => {
            if (err) console.log(err);
            let result = [];
            instructors.forEach(instructor => {
                locs = locations.filter(loc => loc.instructor_id === instructor.id)
                instructor.locations = locs;
                sprts = sports.filter(sport => sport.instructor_id === instructor.id)
                instructor.sports = sprts;
                result.push(instructor);
            });
            Promise.all(result)
                .then(result => res.json(result))
                .catch(err => console.log(err))
        })
    })
}




app.get('/instructor/:id', (req, res) => {
    if (req.headers.key === "123") {
        let instructorQuery = 'SELECT id,user_name,email,first_name,last_name,year_of_birth,gender,street,street_number,region_id,phone,education,photo,details FROM instructors WHERE id=?'
        con.query(instructorQuery, req.params.id, (err, instructors) => {
            if (err) console.log(err);
            sqlQuery(instructors, res)
        })
    }
})
app.get('/instructors', (req, res) => {
    if (req.headers.key === "123") {
        const inst_sql = `SELECT inst.id,inst.first_name,inst.last_name FROM instructors inst`;
        con.query(inst_sql, (err, instructors) => {
            if (err) console.log(err);
            sqlQuery(instructors, res);

        })
    }
})



app.post('/login', (req, res) => {
    sql = `SELECT user_name FROM students WHERE (email="${req.body.email}" AND password="${req.body.password}") OR (user_name="${req.body.email}" AND password="${req.body.password}")`
    con.query(sql, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
})

// app.post('/register/instructor', (req, res) => {
//     let sql = `INSERT INTO instructors (first_name , last_name , year_of_birth , street_number , street , )`
// })

//for stefanos
app.post('/contact', (req, res) => {

    const msg = {
        to: 'sobhanessifa@gmail.com',
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.message
    }
    async function send(msg) {
        try {
            const result = await mailtransport.sendMail(msg);
            res.json({ "status": "success" })
        }
        catch (err) {
            console.log(err.message);
            res.json({ "status": "failed" })
        }
    }
    send(msg);
})




app.post('/instructors/upload/data', function (req, resp, next) {

    const { email, user_name, password, first_name, last_name, year_of_birth, region_id, phone, education, gender, street, street_number, locations, sports, zip, occupation, details, photo } = req.body;

    function insert(input_name_val, insert_name) {
        let instructor_id = null;
        con.query(insert_name, [input_name_val], function (err, result) {
            if (err) throw err;
            var sql = 'SELECT id FROM instructors WHERE email = ? AND user_name = ?';
            con.query(sql, [email, user_name], function (err, result) {
                if (err) throw err;
                instructor_id = parseInt(result[0].id);
                var sql1 = "INSERT INTO instructors_locations (instructor_id, location_id) VALUES ?";
                locations.map(item => {
                    var locations = [[instructor_id, item]]
                    con.query(sql1, [locations], function (err, result) {
                        if (err) throw err;
                    });
                })

                var sql2 = "INSERT INTO instructors_sports (instructor_id, sport_id) VALUES ?";
                sports.map(item => {
                    var sports = [[instructor_id, item]]
                    con.query(sql2, [sports], function (err, result) {
                        if (err) throw err;
                    });
                })

            });
        });
        console.log('database uploaded');
        resp.json({ msg: 'Registration have been complited' })
    }

    var input_name_val1;
    var insert_name1;

    if (region_id.length != 0) {
        var input_name_val1 = [[email, user_name, password, first_name, last_name, year_of_birth, region_id, phone, education, gender, street, street_number, zip, occupation, details, photo]];
        var insert_name1 = "INSERT INTO instructors(email, user_name, password, first_name, last_name, year_of_birth, region_id ,phone , education, gender, street, street_number, zip, occupation, details, photo) VALUES ?";
        insert(input_name_val1, insert_name1);
    } else {
        var input_name_val2 = [[email, user_name, password, first_name, last_name, year_of_birth, phone, education, gender, street, street_number, zip, occupation, details, photo]];
        var insert_name2 = "INSERT INTO instructors(email, user_name, password, first_name, last_name, year_of_birth ,phone , education, gender, street, street_number, zip, occupation, details, photo) VALUES ?";
        insert(input_name_val2, insert_name2)
    }
});



app.post('/instructors/upload/img', fileUpload(), (req, res) => {

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
        console.log('image uploaded');

    });
});


app.get('/instructors/used', function (req, resp, next) {

    con.query("SELECT email,user_name FROM instructors", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        const emailuser = result;
        resp.json({ emailuser: emailuser })
        next();
    })
})

app.get('/locations', function (req, resp, next) {

    con.query("SELECT * FROM locations", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        const locations = result;
        resp.json(locations)
        next();
    })
})

////////////////////////


app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
})


////////////////////////

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
