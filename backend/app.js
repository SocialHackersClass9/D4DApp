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
    user: `${process.env.MYSQL_USER}`,
    password: `${process.env.MYSQL_PASSWORD}`,
    database: 'd4d'
})


app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
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
    let sql = `SELECT DISTINCT name,name_gr FROM regions`
    con.query(sql, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
});

app.get('/search/region=:region_id-sport=:sport', (req, res) => {
    let sql;
    if (req.params.region_id === "*" && req.params.sport === "*") {
        sql = "SELECT instructors.first_name , instructors.last_name , sports.name , sports.name_gr FROM instructors,sports INNER JOIN instructors_sports ON instructors_sports.id=sports.id"
    }
    else if (req.params.region_id === "*") {
        sql = `SELECT instructors.first_name , instructors.last_name , sports.name , sports.name_gr FROM instructors,sports INNER JOIN instructors_sports ON instructors_sports.id=sports.id WHERE sports.id=${req.params.sport}`
    }
    else if (req.params.sport === "*") {
        sql = `SELECT instructors.first_name , instructors.last_name , sports.name , sports.name_gr FROM instructors,sports INNER JOIN instructors_sports ON instructors_sports.id=sports.id WHERE instructors.region_id=${req.params.region_id}`
    }
    else {
        sql = `SELECT instructors.first_name , instructors.last_name , sports.name , sports.name_gr FROM instructors,sports INNER JOIN instructors_sports ON instructors_sports.id=sports.id WHERE instructors.region_id=${req.params.region_id} AND sports.id=${req.params.sport}`
    }
    con.query(sql, (err, result) => {
        if (err) console.log(err);
        res.json(result)
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