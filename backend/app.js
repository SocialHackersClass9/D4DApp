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
con.connect((err) => {
    if (err) console.log(err) })

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

app.post('/login',(req,res) => {

    // console.log(req.body)
    // email or username
    sql = `SELECT username FROM login WHERE (email="${req.body.username}" AND password="${req.body.password}") OR (username="${req.body.username}" AND password="${req.body.password}")`

    con.query(sql,(err,result) => {
        if(err) console.log(err)
        res.json(result)
    })
})

////////////////////////

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))