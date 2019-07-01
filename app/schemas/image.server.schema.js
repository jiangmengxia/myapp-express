const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ImageSchema = new Schema({
    name:String,
    url: String,/*base64*/
    date:Date,
    uploader:{/*上传者*/
        type:ObjectId,
        ref:'User'
    },
    _id: ObjectId,
}, {
    connection: 'Image', //模型名称,
})


module.exports = ImageSchema