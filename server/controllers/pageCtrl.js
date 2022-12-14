const path = require('path')

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../../index.html'))
    },
    javaScript: (req, res) => {
        res.sendFile(path.join(__dirname, '../../main.js'))
    },
    css: (req, res) => {
        res.sendFile(path.join(__dirname, '../../styles.css'))
    }
}