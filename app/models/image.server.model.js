const mongoose = require('mongoose')
const ImageSchema = require('../schemas/image.server.schema')
const imageModel = mongoose.model('Image', ImageSchema)
module.exports = imageModel