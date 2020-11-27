var { PostMessage, PostChat } = require('../models/post_message');
var Notification = require('../models/notification');
var { Post } = require('../models/post');


async function getMyChats(req, res, next) {
    try {
        var chats = await PostChat.find({
            to: req.user._id
        }).populate('from').exec();
        return res.send(chats)
    } catch (error) {
        console.log(error);
        return res.send({})

    }
};

async function getMyChats(req, res, next) {
    try {
        var chats = await PostChat.aggregate([
            { $match: { to: req.user._id } },
            {
                $lookup: {
                    from: "postmessages",
                    let: { id: '$_id' },
                    as: "message",
                    pipeline: [{
                        $match: {
                            $expr: { $eq: ['$chat_id', '$$id'] }
                        }
                    }, { $limit: 1 }, { $sort: { updated_at: -1 } }]
                }
            }, {
                $unwind: "$message"
            }, {
                $lookup: {
                    from: "users",
                    localField: "from",
                    foreignField: "_id",
                    as: "from"
                }
            }, {
                $project: {
                    "_id": "$_id",
                    "to": "$to",
                    // "messages": { "$arrayElemAt": ["$messages", 0] },
                    "message": "$message",
                    "from": { "$arrayElemAt": ["$from", 0] }
                }
            }
        ]).exec();
        // var chatMessage = PostMessage.findOne({}).sort({created_at: -1}).exec(function(err, post) { ... });
        return res.send(chats)
    } catch (error) {
        console.log(error);
        return res.send({})
    }
};



async function getMyChatMessages(req, res, next) {
    try {
        var chat_id = req.params.chat_id;

        console.log(chat, "CHAT");
        var chat = await PostChat.findById({ _id: chat_id }).populate("from").populate("post_id");

        if (!chat) {
            return res.status(200).send([])
        }
        var messages = await PostMessage.find({ chat_id: chat._id }).sort({ updated_at: -1 });
        return res.send({ messages, chat })
    } catch (error) {
        console.log(error);

        return res.send([])

    }
}

async function getPostMessages(req, res, next) {
    try {
        var post_id = req.params.post_id;

        var chat = await PostChat.findOne({ post_id, from: req.user.id })
        console.log(chat, "CHAT");

        if (!chat) {
            return res.status(200).send([])
        }
        var messages = await PostMessage.find({ chat_id: chat._id }).sort({ updated_at: -1 });
        return res.send({ messages, chat })
    } catch (error) {
        console.log(error);

        return res.send([]);

    }
}

async function sendMyMessages(req, res, next) {
    try {
        let data = req.body;
        let chat = await PostChat.findOne({ from: data.from, to: data.to, post_id: data.post_id });
        if (!chat) {
            chat = await PostChat.findOne({ from: data.to, to: data.from, post_id: data.post_id });
        };
        if (!chat) {
            chat = await PostChat.create({ from: data.from, to: data.to, post_id: data.post_id });
        };
        var msg = await PostMessage.create({ from: data.from, to: data.to, message: data.message, chat_id: chat._id });
        res.send({
            success: true
        });
        var post = await Post.findOne({ _id: data.post_id });
        let type = 'post';
        let ref = data.post_id;
        if (post && post.user_id == data.to) {
            type = 'chat'
            ref = String(chat._id)
        }
        Notification.create({ user_id: data.to, message: "You have a new Message", is_read: false, ref: ref, type: type });
    } catch (error) {
        console.log(error);
        return res.send({
            success: false
        });
    }
};


module.exports = {
    getMyChats,
    getMyChatMessages,
    sendMyMessages,
    getPostMessages
}
