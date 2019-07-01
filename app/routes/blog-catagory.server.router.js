var express = require('express');
var router = express.Router();
BlogServer = require('../controllers/blog-catagory.server.ctrl')
/* GET users listing. */
/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });


router.post('/addblogcata', function (req, res, next) {
    var params = req.body
    BlogServer.addBlogCatagory(params).then(data => {
        res.json({
            ret: 1,
            // data: data
        })
    })
});
//
// router.post('/editblog', function(req, res, next) {
//     var params = req.body
//     BlogServer.editBlog(params).then(data=>{
//         res.json({
//             ret: 1,
//             data:data
//         })
//     })
// });
router.post('/delete', function (req, res) {
    var params = req.body
    BlogServer.deleteBlogCataById(params).then(data => {
        res.json({
            ret: 1,
            data: data
        })
    })
});
/*获取所有分类*/
router.post('/getblogcatagorys', function (req, res, next) {
    var params = req.body
    BlogServer.getBlogCataList(params).then(data => {
        res.json({
            ret: 1,
            data: data.data
        })
    })
});
// router.post('/getblogbyid', function(req, res, next) {
//     var params = req.body
//     BlogServer.findBlogById(params).then(data=>{
//         res.json({
//             ret: 1,
//             data:data
//         })
//     })
// });

module.exports = router;
