const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./src/routes/route-coffeeshop')
app.use('/', appRoute)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server Running ' + port);
})