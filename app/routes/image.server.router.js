var express = require('express');
var router = express.Router();
ImageServer = require('../controllers/image.server.ctrl')
const formidable = require('formidable')
const path = require('path')

router.post('/upload', function (req, res, next) {
    var form = new formidable.IncomingForm()
    form.encoding = 'utf-8';
    form.uploadDir = path.join(__dirname, '../../public/upload');
    form.keepExtensions = true;
    form.type = 'urlencoded'
    form.parse(req, function (err, fields, files) {
        if (err) console.log(err)
        console.log('files', files)
        console.log('fields', fields)
        let file = files.file
        ImageServer.upload({
            name: file.name,
            url: file.path,
            uploader: '5b593929d51bbc3414f778d3',
        }).then(data => {
            res.json({
                ret: 1,
                data: data
            })
        })
    });

});
router.post('/getimagelist', function (req, res, next) {
    var params = req.body
    console.log('------------------------------get image')
    ImageServer.getImageList(params).then(data => {
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
