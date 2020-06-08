const express = require('express')
const app = express()

const env = require('./env')
env.get();
const port = process.env.PORT

app.get('/', (req, res) => {
    res.json({"greeting": "Hello World!"});
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
