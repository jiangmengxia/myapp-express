const mongoose = require('mongoose')
const UserSchema = require('../schemas/user.server.schema')
const userModel = mongoose.model('User', UserSchema)
module.exports = userModel