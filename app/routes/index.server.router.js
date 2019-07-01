var express = require('express');
var router = express.Router();
userCtrl = require('../controllers/user.server.ctrl')
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});
router.post('/getusers', function(req, res, next) {
   userCtrl.getusers().then(data=>{
        res.json({
            ret: 1,
            data:data
        })
    })
})
router.post('/adduser',function(req, res, next) {
    var params = req.body
    userCtrl.adduser(params).then(data=>{
        res.json({
            ret: 1,
            data:data
        })
    })
})

router.post('/deleteuser',function(req, res) {
    var params = req.body
    console.log('deleteuser params',params)
    userCtrl.deleteUser(params).then(data=>{
        res.json({
            ret: 1,
            data:data
        })
    })
})

router.post('/getuserbyid',function(req, res) {
    var params = req.body
    userCtrl.getUserById(params).then(data=>{
        if(!!data.success){
            res.json({
                ret: 1,
                data:data.data
            })
        }else{
            res.json({
                ret: 0,
                msg:data.msg
            })
        }

    })
})

router.post('/getuserbyusername',function(req, res) {
    var params = req.body
    userCtrl.getUserByUsername(params).then(data=>{
        if(!!data.success){
            res.json({
                ret: 1,
                data:data.data
            })
        }else{
            res.json({
                ret: 0,
                msg:data.msg
            })
        }

    })
})

router.post('/updateuser',function(req, res) {
    var params = req.body
    userCtrl.updateUser(params).then(data=>{
        if(!!data.success){
            res.json({
                ret: 1,
                data:data.data
            })
        }else{
            console.log('----')
            res.json({
                ret: 0,
                msg:data.msg
            })
        }

    })
})



module.exports = router;
