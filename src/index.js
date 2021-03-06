const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./controllers/authController')(app)

app.get('/', (req, res) => {
    res.send('Ok')
})

app.listen(3001)