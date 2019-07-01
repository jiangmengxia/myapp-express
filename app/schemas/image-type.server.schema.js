const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ImageTypeSchema = new Schema({
    name:String,
    date:Date,
    _id: ObjectId,
}, {
    connection: 'ImageType', //模型名称,
})


module.exports = ImageTypeSchema