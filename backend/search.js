const express = require('express'),
    mysql = require('mysql'),
    bodyParser = require('body-parser');


const app = express();
let redirectTo;

router.get('/', (req, res) => {

    redirectTo = req.url;

    res.send('hello world from search page');


})

router.post('/', (req, res) => {

    let sql = ``;


})