const multer = require('multer');
var path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const passport = require('passport');
const unlinkAsync = promisify(fs.unlink);
var AWS = require('aws-sdk')
// var s3 = new AWS.S3({
//     "accessKeyId": "34AKIAISB5NF5HRDBUUQ4SMA",
//     "secretAccessKey": "fT3zvDASAyvhp/ncLj3HaJqZ7dSSSG3sMrPMlzKSDFozdvv/"
// });

// var multerS3 = require('multer-s3')


// var upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: 'propertyaaaa',
//         metadata: function (req, file, cb) {
//             cb(null, { fieldName: file.fieldname });
//         },
//         key: function (req, file, cb) {
//             cb(null, `${file.fieldname}-${Date.now().toString()}.${file.mimetype.split("/")[1]}`)
//         }
//     })
// })

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ID || "AKIAISB5NF5HRBUUQ4MA",
//     secretAccessKey: process.env.AWS_SECRET || "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"
// })

// const storage = multer.memoryStorage({
//     destination: function(req, file, callback) {
//         callback(null, '')
//     }
// })

// const upload = multer({storage})

var { ValidatePost } = require('../validators/post')
var storage = multer.diskStorage({
    destination: path.join(__dirname, '../media/images'),
    filename: function (req, file, cb) {
        console.log(file.mimetype);
        var type = file.mimetype.split("/")[1];
        cb(null, file.fieldname + '-' + Date.now() + `.${type}`)
    }
})

var {
    UserPostCreate,
    getAllDropDowns,
    UserPostUpdate,
    getActivePosts,
    getPostById,
    getMyPosts,
    getAllPosts,
    getRecentPosts
} = require('../controllers/post')

var upload = multer({ storage: storage })
// const upload = multer({ dest: path.join(__dirname, '../media/images') });
const { isAuthenticated } = require('../middleware/isAuth')

var express = require('express');
var router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        // return res.json({ filename: req.file.key }); FOR S3
        return res.json({ filename: req.file.filename }); // FOR LOCAL

    }
    return res.send("UPLOAD FAILED")
});

router.delete('/delete-image', async (req, res) => {
    try {
        await unlinkAsync(path.join(__dirname, '../media/images') + '/' + req.query.filename)
        // return s3.deleteObject({ bucket: "propertyaaaa", key: req.query.filename }, function (err, data) {
        return res.send({ success: true })
        // });
    } catch (error) {
        console.log(error);
        return res.send({ sucess: false })
    }
});

router.get('/get-dropdowns', getAllDropDowns)

router.post('/create', passport.authenticate('jwt'), ValidatePost, UserPostCreate)
router.post('/update', passport.authenticate('jwt'), UserPostUpdate);

router.post('/get-posts', isAuthenticated, getActivePosts)

router.post('/get-my-posts', passport.authenticate('jwt'), getMyPosts)

router.get('/get-post-by-id/:id', getPostById)

router.post('/get-all-posts', getAllPosts);

router.get('/recent-posts', getRecentPosts)



module.exports = router;