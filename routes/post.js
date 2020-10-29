const multer = require('multer');
path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const passport = require('passport');
const unlinkAsync = promisify(fs.unlink);

var { ValidatePost } = require('../validators/post')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../media/images'))
    },
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
    getMyPosts
} = require('../controllers/post')

var upload = multer({ storage: storage })
// const upload = multer({dest: path.join(__dirname , '../media/images')});
const { isAuthenticated } = require('../middleware/isAuth')

var express = require('express');
var router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        return res.json({ filename: req.file.filename });
    }
    return res.send("FFAILED")

});

router.delete('/delete-image', async (req, res) => {
    try {
        await unlinkAsync(path.join(__dirname, '../media/images') + '/' + req.query.filename)
    } catch (error) {
        console.log(error);
    } finally {
        return res.send({ sucess: true })
    }
});

router.get('/get-dropdowns', getAllDropDowns)



router.post('/create', passport.authenticate('jwt'), ValidatePost, UserPostCreate)
router.post('/update', passport.authenticate('jwt'), UserPostUpdate);



router.post('/get-posts', isAuthenticated, getActivePosts)

router.post('/get-my-posts', passport.authenticate('jwt'), getMyPosts)


router.get('/get-post-by-id/:id', getPostById)



module.exports = router;