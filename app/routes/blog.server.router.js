var express = require('express');
var router = express.Router();
BlogServer = require('../controllers/blog.server.ctrl')
/* GET users listing. */
/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });


router.post('/addblog', function(req, res, next) {
    var params = req.body
    // console.log('------------------params',params)
    BlogServer.addBlog(params).then(data=>{
        res.json({
            ret: 1,
            data:data
        })
    })
});
router.post('/addblogcatagory', function(req, res, next) {
    var params = req.body
    // console.log('------------------params',params)
    BlogServer.addBlog(params).then(data=>{
        res.json({
            ret: 1,
            data:data
        })
    })
});

router.post('/editblog', function(req, res, next) {
    var params = req.body
    BlogServer.editBlog(params).then(data=>{
        res.json({
            ret: 1,
            data:data
        })
    })
});
router.post('/delete', function(req, res, next) {
    var params = req.body
    // console.log('------------------params',params)
    BlogServer.deleteBlogById(params).then(data=>{
        res.json({
            ret: 1,
            data:data
        })
    })
});
router.post('/getbloglist', function(req, res, next) {
    var params = req.body
    BlogServer.getBlogList(params).then(data=>{
        res.json({
            ret: 1,
            data:data.data
        })
    })
});
router.post('/getblogbyid', function(req, res, next) {
    var params = req.body
    BlogServer.findBlogById(params).then(data=>{
        res.json({
            ret: 1,
            data:data
        })
    })
});

module.exports = router;
