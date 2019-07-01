const mongoose = require('mongoose')
const IMAGE = require('../models/image.server.model')
const config = require('../config/config')

module.exports = {
    upload: function (params) {
        let {name, url, uploader} = params
        url = config.uploadUrl + url.split('public\\upload\\')[1]
        return new Promise((resolve, reject) => {
            let image = new IMAGE({
                _id: new mongoose.Types.ObjectId(),
                name: name,
                url: url,
                uploader: uploader,
                date: new Date()
            })
            image.save((err, res) => {
                if (err)
                    reject(err)
                resolve({
                    path: url,
                    name: name
                })
            })
        })
    },
    getImageList: function (params) {
        // console.log('getImageList-----------')
        let {page, page_num} = params
        if (params === {})//获取所有图片
            return new Promise((resolve, reject) => {
                IMAGE.count({}, (err, count) => {
                    IMAGE.find({})
                        .populate([
                            {
                                path: 'uploader', select: 'username'
                            }
                        ]).exec((err, res) => {
                        if (err) reject(err)
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
        else
            return new Promise((resolve, reject) => {
                IMAGE.count({}, (err, count) => {
                    IMAGE.find({})
                        .skip((page - 1) * page_num)
                        .limit(page_num)
                        .populate([
                            {
                                path: 'uploader', select: 'username'
                            }
                        ]).exec((err, res) => {
                        if (err) reject(err)
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
    deleteImage: function (params) {
        let {_id} = params
        return new Promise((resolve, reject) => {
            IMAGE.findByIdAndRemove(_id, {}, (err) => {
                if (err) {
                    resolve({ret: 0, msg: '删除失败！'})
                    reject('delete user failed , error:', err)
                }
                resolve({ret: 1})
            })
        })
    }
}