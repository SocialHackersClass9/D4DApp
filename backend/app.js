const express = require('express')
const cors = require('cors')
const env = require('./env')
const mysql = require('mysql')

env.get();
const port = process.env.PORT


const app = express()
app.use(cors())

const db_password = process.env.DB_PASSWORD
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Evina',
    password: db_password,
    database: 'D4D',

});
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
