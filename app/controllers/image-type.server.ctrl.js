const mongoose = require('mongoose')
const IMAGETYPE = require('../models/image-type.server.model')
const config = require('../config/config')

module.exports = {
    addImageType: function (params) {
        let {name} = params
        // url = config.uploadUrl + url.split('public\\upload\\')[1]
        return new Promise((resolve, reject) => {
            let imageType = new IMAGETYPE({
                _id: new mongoose.Types.ObjectId(),
                name: name,
                date: new Date()
            })
            imageType.save((err) => {
                if (err) reject('add image type failed , error:', err)
                resolve({ret: 1})
            })
        })
    },
    getImageTypeList: function (params) {
        return new Promise((resolve, reject) => {
            IMAGETYPE.find({}).exec((err, res) => {
                if (err) reject(err)
                resolve({
                    success: 1,
                    data: {
                        list: res
                    }
                })
            })
        })
    },
    deleteImageType: function (params) {
        let {_id} = params
        return new Promise((resolve, reject) => {
            IMAGETYPE.findByIdAndRemove(_id, {}, (err) => {
                if (err) {
                    resolve({ret: 0, msg: '删除失败！'})
                    reject('delete image type failed , error:', err)
                }
                resolve({ret: 1})
            })
        })
    }
}