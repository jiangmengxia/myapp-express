const mongoose = require('mongoose')
const BlogSchema = require('../schemas/blog.server.schema')
const blogModel = mongoose.model('Blog', BlogSchema)
module.exports = blogModel