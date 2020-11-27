var {
    Post,
    PostImage,
    PostType,
    PostPropertyType,
    PostFurnishing
} = require('../models/post')


function UserPostCreate(req, res, next) {
    var data = { ...req.ValidatedData }
    console.log(req.ValidatedData);
    try {
        return Post.create({ ...data, isAvailable: true, user_id: req.user._id }).then(e => {
            return res.send({ success: true });
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
        delete data.id
        var post = await Post.update({ _id: id }, data);
        return res.send({ success: true });
    } catch (error) {
        res.send({ success: false, error: error })
    }
}

function getAllDropDowns(req, res, next) {
    return Promise.all([PostType.find({}).sort({ "name": 1 }), PostPropertyType.find({}).sort({ "name": 1 }), PostFurnishing.find({})]).then(values => {
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
            var post = await Post.findById(id).exec();
            res.send({ ...post._doc })
        } else {
            res.status(400).send({ "message": "Post Not Found" })
        }
    } catch (error) {
        res.status(400).send({ "message": "Post Not Found", error: error })
    }
}

async function getMyPosts(req, res, next) {
    try {
        var posts = await Post.find({ user_id: req.user._id })
        res.send({ posts })
    } catch (error) {
        console.error(error);
        res.status(400).send({ "message": "Post Not Found.", error: error })
    }
}


async function getAllPosts(req, res, next) {
    try {
        let sortByQuery = {
            1: {
                rent: -1
            },
            2: {
                rent: 1
            },
            3: {
                updated_at: -1
            }
        }
        var searchString = req.body.search;
        var sortBy = sortByQuery[req.body.sortBy];
        console.log(req.body, searchString);
        var property_type = req.body.property_type
        var posts = await Post.find({
            "$or": [
                { "title": { "$regex": String(searchString), "$options": "gi" } },
                { "description": { "$regex": String(searchString), "$options": "gi" } },
                { "type": { "$regex": String(searchString), "$options": "gi" } },
                { "property_type": { "$regex": String(searchString), "$options": "gi" } },
                { "furnishing": { "$regex": String(searchString), "$options": "gi" } },

                { "property_type": { $in: property_type } },
                { "type": { "$in": [...req.body.type] } },
                { "furnishing": { "$in": [...req.body.furnishing] } },
                { "location": { "$regex": String(searchString), "$options": "gi" } }
            ],
            isAvailable: true
            // ,
            // "property_type": { $in: property_type },
            // "type": { "$in": [...req.body.type] },
            // "furnishing": { "$in": [...req.body.furnishing]},
        }).sort(sortBy)
        // .skip(20)
        // .limit(10)
        // .exec();
        res.send({ posts })

    } catch (error) {
        console.error(error);
        res.status(400).send({ "message": "Post Not Found.", error: error })
    }
}


async function getRecentPosts(req, res, next) {
    try {
        var posts = await Post.find({}).sort({ updated_at: -1 }).limit(5).exec();
        return res.status(200).send(posts);
    } catch (error) {
        console.log(error);
        return res.status(200).send([]);
    }

}

module.exports = {
    UserPostCreate,
    UserPostUpdate,
    getAllDropDowns,
    getActivePosts,
    getPostById,
    getMyPosts,
    getAllPosts,
    getRecentPosts
}