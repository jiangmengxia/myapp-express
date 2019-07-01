const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
    username: String,
    mobile: String,
    intro:String,
    detailIntro:String,
    professionalSkill:String,
    _id: ObjectId,
}, {
    connection: 'User', //模型名称,
})

module.exports = UserSchema