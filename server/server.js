const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const { home, javaScript, css } = require('./controllers/pageCtrl')

app.get('/', home)
app.get('/js', javaScript)
app.get('/css', css)

const { PORT } = process.env
app.listen(PORT, () => console.log(`Listening on ${PORT}`))