var {
    Post,
    PostImage,
    PostType,
    PostPropertyType,
    PostFurnishing
} = require('../models/post')


function UserPostCreate(req, res, next) {
    var data = { ...req.ValidatedData }
    console.log(req.user);

    var images = data.images || [];
    try {
        return Post.create({ ...data, isAvailable: true, user_id: req.user._id }).then(e => {
            return PostImage.create(images.map(i => { return { path: i, post_id: e._id } })).then(re => {
                return res.send({ success: true });
            });
        });
    } catch (error) {
        console.log(error);
        return res.send(error)
    }
}



async function UserPostUpdate(req, res, next) {
    try {
        var id = req.body.id;
        var data = req.body
        var images = req.body.images;
        delete data.id
        delete data.images
        var post = await Post.update({ _id: id }, data);
        var del = await PostImage.deleteMany({ post_id: id });
        PostImage.create(images.map(i => { return { path: i, post_id: id } })).then(re => {
            return res.send({ success: true });
        });
    } catch (error) {
        res.send({ success: false, error: error })
    }

}

function getAllDropDowns(req, res, next) {
    return Promise.all([PostType.find({}).sort({ "name": 1}), PostPropertyType.find({}).sort({ "name": 1}), PostFurnishing.find({})]).then(values => {
        var data = {
            types: values[0],
            property_types: values[1],
            furnishings: values[2]
        }
        return res.send(data)
    }).catch(err => {
        return res.send(err)
    })
}

function getActivePosts(req, res, next) {
    res.send({})
}

async function getPostById(req, res, next) {
    console.log(req.params, req.query);
    try {
        if (req.params.id) {
            let id = req.params.id;
            var [post, images] = await Promise.all([Post.findById(id).populate('furnishing').populate('type').populate('property_type').populate('listed_by').exec(), PostImage.find({ post_id: id })]);
            res.send({ ...post._doc, images: images })
        } else {
            res.status(400).send({ "message": "Post Not Found" })
        }
    } catch (error) {
        res.status(400).send({ "message": "Post Not Found", error: error })
    }
}

async function getMyPosts(req, res, next) {
    try {
        var posts = await Post.aggregate([{ "$match": { "user_id": String(req.user._id) } }, {
            "$lookup": { "from": 'postimages', "localField": '_id', "foreignField": 'post_id', "as": 'images' }
        }
        ]);
        res.send({ posts })

    } catch (error) {
        console.error(error);
        res.status(400).send({ "message": "Post Not Found.", error: error })
    }
}

module.exports = {
    UserPostCreate,
    UserPostUpdate,
    getAllDropDowns,
    getActivePosts,
    getPostById,
    getMyPosts
}