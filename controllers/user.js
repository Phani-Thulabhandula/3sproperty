
var User = require('../models/user');
var jwt = require('jsonwebtoken')

function UserRegister(req, res, done) {
    let newUser = new User(req.ValidatedData);
    return newUser.save().then(us => {
        jwt.sign({ id: us._id }, 'secret', { algorithm: 'HS256' }, function (err, token) {
            return res.status(201).send(
                {
                    success: true,
                    message: "User regitered success.",
                    userInfo: { first_name: us.first_name, email: us.email, id: us._id },
                    token
                }
            )
        }).catch(err => {
            return res.send({
                success: false,
                message: "User regitered Failed.",
                error: err
            });
        });
    })
}

// Sample purpose 
function UserLogin(req, res, done) {
    return res.status(201).send(
        {
            success: true,
            message: "User login success."
        }
    )
}


function UserUpdate(req, res, done) {
    let data = req.ValidatedData;
    return User.findOne({ email: req.user.email }, function (err, user) {
        if (err) {
            return res.staus(400).send({
                success: false,
                message: "User Doest not exists."
            });
        }
        doc.first_name = data.name;
        doc.last_name = data.name;
        doc.phone = data.phone;
        doc.email = data.email;
        doc.save((user) => {
            return res.status(200).send({
                success: true,
                message: "User Updated success."
            });
        });
    });
}

function getProfile(req, res, done) {
    return User.findOne({ email: req.user.email }, function (err, user) {
        if (err) {
            return res.staus(400).send({
                success: false,
                message: "User Doest not exists."
            })
        }
        return res.status(200).send({ id: user._id, email: user.email, first_name: user.first_name, last_name: user.last_name, phone: user.phone })
    });
}

module.exports = {
    UserRegister,
    UserLogin,
    UserUpdate,
    getProfile
}