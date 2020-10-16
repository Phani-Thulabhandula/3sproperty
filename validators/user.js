const Joi = require('joi');
var { loginSchema, registerSchema, updateUserSchema } = require('./schemas/schema')

function ValidateUser(req, res, next) {
    var { error, result } = registerSchema.validate(req.body);
    if (error) {
        let messages = error["details"].map(e => e.message) || ["Validation Failed"]
        return res.status(400).send({errors: messages})
    }
    req.ValidatedData = req.body;
    next();
}

function ValidateLogin(req, res, next) {
    var { error, result } = loginSchema.validate(req.body);
    if (error) {
        let messages = error["details"].map(e => e.message) || ["Validation Failed"]
        return res.status(400).send({errors: messages})
    }
    req.ValidatedData = req.body;
    next();
}

function ValidateUpdateUser(req, res, next) {
    var { error, result } = updateUserSchema.validate(req.body);
    if (error) {
        let messages = error["details"].map(e => e.message) || ["Validation Failed"]
        return res.status(400).send({errors: messages})
    }
    req.ValidatedData = req.body;
    next();
}

module.exports = {
    ValidateUser,
    ValidateLogin,
    ValidateUpdateUser
}