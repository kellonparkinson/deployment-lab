const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/js', express.static(path.join(__dirname, '../index.js')))
app.use('/css', express.static(path.join(__dirname, '../index.css')))

const { home, javaScript, css } = require('./controllers/pageCtrl')

app.get('/', home)
app.get('/js', javaScript)
app.get('/css', css)

const { PORT } = process.env
app.listen(PORT, () => console.log(`Listening on ${PORT}`))