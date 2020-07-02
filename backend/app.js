const express = require('express')
const cors = require('cors')
const env = require('./env')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const { urlencoded } = require('body-parser');


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

console.log(process.env.MYSQL_USER)


app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
})


////////////////////////


app.get('/search/sports', (req, res) => {
    let sql = `SELECT DISTINCT sport FROM sports`


    con.query(sql, (err, result) => {
        if (err) console.log(err);
        res.json(result)
    })

});

app.get('/search/locations', (req, res) => {
    let sql = `SELECT DISTINCT city FROM instructor`


    con.query(sql, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })


});

app.get('/search/location=:location-sport=:sport', (req, res) => {
    let sql = `SELECT instructor.* , sports.sport FROM instructor INNER JOIN sports ON instructor.id=sports.id WHERE instructor.city="${req.params.location}" AND sports.sport="${req.params.sport}"`


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

        send(msg);
    }
})

////////////////////////

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))