const Joi = require('joi');
var { postSchema } = require('./schemas/schema')

function ValidatePost(req, res, next) {
    var { error, result } = postSchema.validate(req.body, {abortEarly: false});
    if (error) {
        let messages = error["details"].map(e => e.message) || ["Validation Failed"]
        return res.status(400).send({ errors: messages })
    }
    req.ValidatedData = req.body;
    next();
}


module.exports = {
    ValidatePost
}