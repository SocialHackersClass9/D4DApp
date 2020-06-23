const express = require('express')
const cors = require('cors')
const env = require('./env')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mysql = require('mysql');


env.get();
const port = process.env.PORT

const app = express()
app.use(cors())

let con = mysql.createConnection({
    host: 'localhost',
    user: 'sobhan',
    password: 'Sobhan123!@#',
    database: 'd4d'
})

console.log(process.env.mysqlUser)


app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
})

////////////////////////


app.get('/search/sports', (req, res) => {
    let sql = `SELECT DISTINCT sport FROM sports`

    con.connect((err) => {

        if (err) console.log(err);
        con.query(sql, (err, result) => {
            if (err) console.log(err);
            res.json(result)
        })
    })
});

app.get('/search/locations', (req, res) => {
    let sql = `SELECT DISTINCT city FROM instructor`

    con.connect((err) => {
        if (err) console.log(err)
        con.query(sql, (err, result) => {
            if (err) console.log(err)
            res.json(result)
        })
    })
});


////////////////////////

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))