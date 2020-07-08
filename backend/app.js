const express = require('express')
const cors = require('cors')
const env = require('./env')
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mysql = require('mysql');

env.get();
const port = process.env.PORT


const app = express()
app.use(cors())
//for stefanos
app.use(express.urlencoded({ extended: true }))
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
    user: `sobhan`,
    password: `Sobhan123!@#`,
    database: 'd4d'
})


app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
})

app.get('/instructor', (req, res) => {
    let instructorQuery = 'SELECT * FROM instructors WHERE id=1'
    con.query(instructorQuery, (err, result) => {
        if (err) console.log(err);
        res.json(result[0])
    })
})

////////////////////////


app.get('/search/sports', (req, res) => {
    let sql = `SELECT DISTINCT name,name_gr FROM sports`
    con.query(sql, (err, result) => {
        if (err) console.log(err);
        res.json(result)
    })
});

app.get('/search/regions', (req, res) => {
    let sql = `SELECT DISTINCT name,name_gr,region_id FROM regions`
    con.query(sql, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
});

app.get('/search/region=:region_id-sport=:sport', (req, res) => {

    const inst_sql = `SELECT inst.id,inst.first_name,inst.last_name FROM instructors inst`;
    let loc_sql = "SELECT insl.instructor_id,insl.location_id ,loc.name,loc.region_id,r.name as rname FROM instructors_locations insl INNER JOIN locations loc ON insl.location_id=loc.id INNER JOIN regions r ON loc.region_id=r.id"
    let sprt_sql = "SELECT inss.instructor_id , inss.sport_id , s.name FROM instructors_sports inss INNER JOIN sports s ON inss.sport_id=s.id"

    let sql_tables = "";
    let sql_where = "";
    let params = [];

    con.query(inst_sql, (err, instructors) => {
        if (err) console.log(err);
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

    })



})



app.post('/login', (req, res) => {

    // console.log(req.body)
    // email or username
    sql = `SELECT username FROM login WHERE (email="${req.body.username}" AND password="${req.body.password}") OR (username="${req.body.username}" AND password="${req.body.password}")`

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

////////////////////////

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
