var express = require('express');
var router = express.Router();
ImageTypeServer = require('../controllers/image-type.server.ctrl')

router.post('/addImageType',function (req,res,next) {
    ImageTypeServer.getImageTypeList(params).then(data=>{

    })
})

router.post('/getimagetypelist', function (req, res, next) {
    var params = req.body
    console.log('------------------------------get image')
    ImageTypeServer.getImageTypeList(params).then(data => {
        res.json({
            ret: 1,
            data: data.data
        })
    })
});
router.post('/delete', function (req, res, next) {
    var params = req.body
    ImageServer.deleteImage(params).then(data => {
        res.json(data)
    })
});

module.exports = router;
