const Joi = require('joi');


const loginSchema = Joi.object({
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required()
});

const registerSchema = Joi.object({
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    first_name: Joi.string().min(3).required(),
});

const updateUserSchema = Joi.object({
    phone: Joi.number(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3),

});


const postSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string().required(),
    property_type: Joi.string().required(),
    furnishing: Joi.string().required(),
    rent: Joi.number().required(),
    car_parking: Joi.number().required(),
    floor_number: Joi.number().required(),
    location: Joi.string().required(),
    age: Joi.number().required(),
    landmarks: Joi.string().required(),
    images: Joi.array().required(),
    isAvailable: Joi.boolean().required()
});


module.exports = {
    loginSchema,
    registerSchema,
    updateUserSchema,
    postSchema
}