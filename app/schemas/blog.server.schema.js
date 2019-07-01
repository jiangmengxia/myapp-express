const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const BlogSchema = new Schema({
    content: String,
    title:String,
    date:Date,
    cover:{//封面
        type:ObjectId,
        ref:'Image'
    },
    author:{
        type:ObjectId,
        ref:'User'
    },
    _id: ObjectId,
}, {
    connection: 'Blog', //模型名称,
})

module.exports = BlogSchema