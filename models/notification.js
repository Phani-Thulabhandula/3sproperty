var mongoose = require('mongoose');
const { Schema } = mongoose;

const NotificationSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    message: {
        type: String,
        max: 1000,
        required: false
    },
    is_read: {
        type: Boolean,
        default: false
    },
    ref: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
});




module.exports = mongoose.model('Notfication', NotificationSchema)