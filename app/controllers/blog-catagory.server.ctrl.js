const mongoose = require('mongoose')
const BLOG_CATA = require('../models/blog-catagory.server.model')
module.exports = {
    /*增加分类*/
    addBlogCatagory: function (params) {
        let {name, author} = params
        let date = new Date()
        return new Promise((resolve, reject) => {
            let blog = new BLOG_CATA({
                _id: new mongoose.Types.ObjectId(),
                name: name,
                author: author,
                date: date
            })
            blog.save((err, res) => {
                if (err)
                    reject(err)
                resolve(res)
            })
        })
    },
    /*编辑分类*/
    editBlogCata: function (params) {
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
    deleteBlogCataById: function (params) {
        let {_id} = params
        return new Promise((resolve, reject) => {
            BLOG_CATA.findByIdAndRemove(_id, {}, (err, res) => {
                if (err)
                    reject(err)
                resolve(res)
            })
        })
    },
    getBlogCataList: function (params) {
        let {page, page_num, author} = params
        let p = {}
        if (author) p = {author: author}
        return new Promise((resolve, reject) => {
            BLOG_CATA.find(p).count((err, count) => {
                //     if (err) reject(err)
                // let count = 0
                BLOG_CATA.find(p)
                    .skip((page - 1) * page_num)
                    .limit(page_num)
                    .populate([
                        {
                            path: 'author', select: 'username'
                        }
                    ])
                    .sort({date: -1})
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
    // findBlogById: function (params) {
    //     let {_id} = params
    //     let date = new Date()
    //     return new Promise((resolve, reject) => {
    //         BLOG.findById(_id, {}, (err, res) => {
    //             if (err)
    //                 reject(err)
    //             resolve(res)
    //         })
    //     })
    // },
}
