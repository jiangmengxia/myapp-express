const mongoose = require('mongoose')
const ImageTypeSchema = require('../schemas/image-type.server.schema')
const imageTypeModel = mongoose.model('ImageType', ImageTypeSchema)
module.exports = imageTypeModel