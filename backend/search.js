const express = require('express'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    { credentials } = require('./config');


const app = express();
const router = express.Router();
let redirectTo;

//mysql connection
let con = mysql.createConnection({
    host: 'localhost',
    user: credentials.mysql.user,
    password: credentials.mysql.password,
    database: credentials.mysql.database
})


router.get('/', (req, res) => {

    redirectTo = req.url;

    res.send('hello world from search page');


})

router.post('/', (req, res) => {

    let sql = ``;


})