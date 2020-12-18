
var User = require('../models/user');
var jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");

async function UserRegister(req, res, done) {
    let user = await User.findOne({ email: req.ValidatedData.email });
    if (user) {
        return res.status(409).send({ success: false, message: "User Already exisits" })
    }
    let newUser = new User(req.ValidatedData);
    return newUser.save().then(us => {
        jwt.sign({ id: us._id }, 'secret', { algorithm: 'HS256' }, function (err, token) {
            var transporter = nodemailer.createTransport({
                host: process.env.email_host || 'smtp.googlemail.com', // Gmail Host
                port: process.env.emailPort || 465, // Port
                secure: true, // this is true as port is 465
                auth: {
                  user: process.env.email,
                  pass: process.env.password
                }
              });
              const mailOptions = {
                from: '"3S Property" <no-reply@3sproperty.com> ', // sender address
                to: req.body.email, // list of receivers
                subject: 'Registerd - Canine Care!', // Subject line
                html: `<p>Hi <strong>${us.first_name || us.email}</strong>, <br> <strong>Your Account has been registered </strong><br> Please check the latest properties</p>`// plain text body
              };
              transporter.sendMail(mailOptions, function (err, info) {
                if (err)
                  console.log(err)
                else
                  console.log(info);
              });
            return res.status(201).send(
                {
                    success: true,
                    message: "User registred success.",
                    userInfo: { name: us.first_name, email: us.email, id: us._id, avatar: us.avatar },
                    token
                }
            )
        }).catch(err => {
            return res.status(400).send({
                success: false,
                message: "User registred Failed.",
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
    let data = req.body;
    return User.findOne({ email: req.user.email }, function (err, user) {
        if (err) {
            return res.staus(400).send({
                success: false,
                message: "User Doest not exists."
            });
        }
        user.first_name = data.first_name;
        user.last_name = data.last_name;
        user.phone = data.phone;
        user.email = data.email;
        user.avatar = data.avatar;
        user.save((suser) => {
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
        return res.status(200).send({
            id: user._id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            phone: user.phone,
            avatar: user.avatar
        })
    });
}

module.exports = {
    UserRegister,
    UserLogin,
    UserUpdate,
    getProfile
}