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


module.exports = {
    loginSchema,
    registerSchema,
    updateUserSchema
}