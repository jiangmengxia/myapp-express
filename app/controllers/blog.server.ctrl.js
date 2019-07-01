const mongoose = require('mongoose')
const BLOG = require('../models/blog.server.model')
module.exports = {
    addBlog: function (params) {
        let {content, author, title, cover} = params
        let date = new Date()
        return new Promise((resolve, reject) => {
            let blog = new BLOG({
                _id: new mongoose.Types.ObjectId(),
                content: content,
                title: title,
                author: author,
                cover: cover,
                date: date
            })
            blog.save((err, res) => {
                if (err)
                    reject(err)
                resolve(res)
            })
        })
    },

    editBlog: function (params) {
        let {content, author, title, cover, _id} = params
        // let date = new Date()
        return new Promise((resolve, reject) => {
            BLOG.update({_id: _id}, {
                $set: {
                    content: content,
                    author: author,
                    title: title,
                    cover: cover,
                }
            }).exec((err, res) => {
                if (err)
                    reject(err)
                resolve(res)
            })
        })
    },
    deleteBlogById: function (params) {
        let {_id} = params
        let date = new Date()
        return new Promise((resolve, reject) => {
            BLOG.findByIdAndRemove(_id, {}, (err, res) => {
                if (err)
                    reject(err)
                resolve(res)
            })
        })
    },
    getBlogList: function (params) {
        let {page, page_num} = params
        return new Promise((resolve, reject) => {
            BLOG.count((err, count) => {
                if (err) reject(err)
                BLOG.find()
                    .skip((page - 1) * page_num)
                    .limit(page_num)
                    .exec((err, res) => {
                        if (err) reject(err)
                        console.log('----------------', res)
                        resolve({
                            success: 1,
                            data: {
                                count: count,
                                list: res
                            }
                        })
                    })
            })

        })
    },
    findBlogById: function (params) {
        let {_id} = params
        let date = new Date()
        return new Promise((resolve, reject) => {
            BLOG.findById(_id, {}, (err, res) => {
                if (err)
                    reject(err)
                resolve(res)
            })
        })
    },
}
