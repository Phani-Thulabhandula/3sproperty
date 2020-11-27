var mongoose = require('mongoose');
const { Schema } = mongoose;

const PostMessageSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    to: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users"
    }, chat_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    message: {
        type: String,
        required: true,
        max: 3000
    },
    is_read: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const PostChatSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    to: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    post_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Post"
    }
}, {
    timestamps: true
});



var PostMessage = mongoose.model('PostMessage', PostMessageSchema);
var PostChat = mongoose.model('PostChat', PostChatSchema);

module.exports = {
    PostMessage,
    PostChat
}