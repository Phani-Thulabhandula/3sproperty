const multer = require('multer');
var path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const passport = require('passport');
const unlinkAsync = promisify(fs.unlink);
const https = require('https');

var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var s3 = new aws.S3({
    accessKeyId: process.env.accessKey ,
    secretAccessKey: process.env.secretAccessKey,
    endpoint: new aws.Endpoint('https://s3.sirv.com'),
    s3ForcePathStyle: true,
    httpOptions: {
        agent: new https.Agent({ rejectUnauthorized: false })
    }
})


var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'methille',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split(".").pop())
        }
    })
})

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

// var upload = multer({ storage: storage }) // LOCAL
// const upload = multer({ dest: path.join(__dirname, '../media/images') });
const { isAuthenticated } = require('../middleware/isAuth')

var express = require('express');
var router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        return res.json({ filename: req.file.key }); // FOR S3
        // return res.json({ filename: req.file.filename }); // FOR LOCAL

    }
    return res.send("UPLOAD FAILED")
});

router.delete('/delete-image', async (req, res) => {
    try {
        // await unlinkAsync(path.join(__dirname, '../media/images') + '/' + req.query.filename);
        return s3.deleteObject({ Bucket: "methille", Key: req.query.filename }, function (err, data) {
            if(err) {
                console.log(err);
                
            }
            return res.send({ success: true });
        });
    } catch (error) {
        console.log(error);
        return res.send({ sucess: false });
    }
});

router.get('/get-dropdowns', getAllDropDowns)

router.post('/create', passport.authenticate('jwt'), ValidatePost, UserPostCreate)
router.post('/update', passport.authenticate('jwt'), UserPostUpdate);

router.post('/get-posts', isAuthenticated, getActivePosts);

router.post('/get-my-posts', passport.authenticate('jwt'), getMyPosts);

router.get('/get-post-by-id/:id', getPostById);

router.post('/get-all-posts', getAllPosts);

router.get('/recent-posts', getRecentPosts)



module.exports = router;