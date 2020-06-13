const express = require('express')
const cors = require('cors')
const env = require('./env')

env.get();
const port = process.env.PORT

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json({"greeting": "Hello World!"});
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
