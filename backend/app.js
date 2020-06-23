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
    user: process.env.mysqlUser,
    password: process.env.mysqlPassword,
    database: 'D4D'
})

console.log(process.env.mysqlUser)


app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
})

////////////////////////





////////////////////////

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))