var mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        required: true,
        min: 3,
        max: 256,
        type: String,
        default: ''
    },
    user_id: {
        required: true,
        type: String,
        default: ''
    },
    type: {
        required: true,
        type: mongoose.Schema.ObjectId,
        ref: 'PostType',
        default: ''
    },
    property_type: {
        required: true,
        type: mongoose.Schema.ObjectId,
        ref: 'PostPropertyType',
        default: ''
    },
    furnishing: {
        required: true,
        type: mongoose.Schema.ObjectId,
        ref: 'PostFurnishing',
        default: ''
    },
    rent: {
        required: true,
        type: Number,
        default: 0
    },
    floor_number: {
        required: true,
        type: Number,
        default: 0
    },
    car_parking: {
        required: true,
        type: Number,
        default: ''
    },
    description: {
        required: true,
        min: 3,
        max: 4000,
        type: String,
        default: ''
    },
    location: {
        required: true,
        type: String,
        default: ''
    },
    isAvailable: {
        required: true,
        min: 3,
        max: 256,
        type: Boolean,
        default: ''
    },
    age: {
        required: true,
        type: String,
        default: ''
    },
    landmarks: {
        required: true,
        min: 3,
        max: 256,
        type: String,
        default: ''
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})



var PostImagesSchema = new Schema({
    post_id: {
        required: true,
        type: mongoose.Schema.ObjectId,
        default: ''
    },
    path: {
        required: true,
        type: String,
        default: ''
    }
});

var PostTypeSchema = new Schema({
    name: {
        required: true,
        type: String,
        unique: true

    }
});


var PostPropertyTypeSchema = new Schema({
    name: {
        required: true,
        type: String,
        unique: true


    }
})


var PostFurnishingTypeSchema = new Schema({
    name: {
        required: true,
        type: String,
        unique: true


    }
});





// var PostMessages = new Schema({

// })

var Post = mongoose.model('Post', PostSchema)
var PostImage = mongoose.model('PostImage', PostImagesSchema)
var PostType = mongoose.model('PostType', PostTypeSchema)
var PostPropertyType = mongoose.model('PostPropertyType', PostPropertyTypeSchema)
var PostFurnishing = mongoose.model('PostFurnishing', PostFurnishingTypeSchema)

module.exports = {
    Post,
    PostImage,
    PostType,
    PostPropertyType,
    PostFurnishing
}