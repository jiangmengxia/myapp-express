const mongoose = require('mongoose')
const BlogCataSchema = require('../schemas/blog-catagory.server.schema')
const blogCataModel = mongoose.model('BlogCata', BlogCataSchema)
module.exports = blogCataModel
