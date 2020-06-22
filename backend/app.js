const express = require('express')
const cors = require('cors')
const env = require('./env')
const searchPage = require('./search');

env.get();
const port = process.env.PORT

const app = express()
app.use(cors())
let redirectTo;

app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
})

app.post('/gdpr', (req, res) => {
    res.cookie('gdpr', 'yes', { maxAge: 2592000 });
    res.redirect(303, redirectTo)
})

app.use('/search', searchPage)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))