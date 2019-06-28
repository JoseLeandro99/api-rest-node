const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/apirest', { useMongoClient: true })

mongoose.Promise = global.Promise

module.exports = mongoose