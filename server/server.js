const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')
// ------------------------------------------------

const { home, javaScript, css } = require('./controllers/pageCtrl')

app.get('/', home)
app.get('/js', javaScript)
app.get('/css', css)

const { PORT } = process.env
app.listen(PORT, () => console.log(`Listening on ${PORT}`))