const path = require('path')

module.exports = {
    home: () => {
        res.sendFile(path.join(__dirname, '../../index.html'))
    }
}