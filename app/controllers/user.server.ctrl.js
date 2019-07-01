const mongoose = require('mongoose')
const USER = require('../models/user.server.model')
module.exports = {
    getusers: function () {
        return new Promise((resolve, reject) => {
            USER.find()
            //     .populate([{
            //     path:'_level',select:'name',//有意思
            // }])
                .exec((err,res)=>{
                console.log('-------------res',res)
                if(err){
                    if (err) reject('add user failed , error:', err)
                }else{
                    resolve(res)
                }
            })
        })
    },
    adduser: function (params) {
        console.log('adduser pamras:',params)
        let {username, mobile,intro,detailIntro,professionalSkill} = params
        return new Promise((resolve, reject) => {
            var user = new USER({
                _id: new mongoose.Types.ObjectId(),
                username: username,
                mobile: mobile,
                intro:intro,
                detailIntro:detailIntro,
                professionalSkill:professionalSkill
            })
            user.save(function (err) {
                if (err) reject('add user failed , error:', err)
                resolve({ret: 1})
            })
        })
    },
    deleteUser: (params) => {
        let {_id} = params
        console.log('_id',_id)
        return new Promise((resolve, reject) => {
            USER.findByIdAndRemove(_id,{},(err)=>{
                if(err)reject('delete user failed , error:', err)
                resolve({ret: 1})
            })
        })
    },
    getUserById:(params) => {
        let {_id} = params
        console.log('_id',_id)
        return new Promise((resolve, reject) => {
            USER.findById(_id,{},(err,doc)=>{
                if(err){
                    resolve({
                        success:false,
                        msg:'查询失败'
                    })
                    reject('delete user failed , error:', err)
                }
                console.log('----doc',doc)
                resolve({
                    success:true,
                    data:doc
                })
            })
        })
    },
    getUserByUsername:(params) => {
        let {username} = params
        return new Promise((resolve, reject) => {
            USER.find({username:username},{},(err,doc)=>{
                if(err){
                    resolve({
                        success:false,
                        msg:'查询失败'
                    })
                    reject('delete user failed , error:', err)
                }
                console.log('----doc',doc)
                resolve({
                    success:true,
                    data:doc
                })
            })
        })
    },
    updateUser:(params)=>{
        let {_id,username,mobile} = params
        return new Promise((resolve, reject) => {
            USER.update({_id:_id},{$set:{username:username,mobile:mobile}} , (err,doc)=>{
                if(err){
                    resolve({
                        success:false,
                        msg:'更改失败'
                    })
                    reject('update user failed , error:', err)
                }else{
                    resolve({
                        success:true,
                        data:doc
                    })
                }
            })
        })
    }
}