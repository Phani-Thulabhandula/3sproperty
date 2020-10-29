var express = require('express');
var router = express.Router();
var { UserRegister, UserUpdate, getProfile } = require('../controllers/user');
const passport = require('passport');
const { isAuthenticated } = require('../middleware/isAuth')
var { ValidateUser, ValidateLogin, ValidateUpdateUser } = require('../validators/user')
var jwt = require('jsonwebtoken');

var User = require('../models/user')
/* Reigster */
router.post('/register', ValidateUser, UserRegister);

/* Login */
// router.post('/login', ValidateLogin, passport.authenticate('local'), (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     req.login(user, (err) => {
//       if (err) {
//         return res.status(400).send({
//           success: false,
//           message: "Logged in Failed"
//         });
//       }
//       return res.status(200).send({
//         success: true,
//         message: "Logged in success",
//         userInfo: {
//           first_name: user.first_name + (user.last_name ? ` ${user.last_name}` : ''),
//           email: user.email,
//           id: user._id
//         }
//       });
//     })
//   })(req, res, next);
// })


router.post('/login', ValidateLogin, (req, res, next) => {
  return User.findOne({ email: req.body.email }).then(user => {
    return user.comparePassword(req.body.password, (err) => {
      if (err) {
        return res.status(401).send({ message: "Authentication Failed.." })
      }
      jwt.sign({ id: user._id }, 'secret', { algorithm: 'HS256' }, function (err, token) {
        if (err) {
          return res.status(400).send({ message: "Authentication Failed.." })
        }
        console.log(token, err);
        return res.send({
          success: true,
          message: "Logged in successss",
          userInfo: {
            first_name: user.first_name + (user.last_name ? ` ${user.last_name}` : ''),
            email: user.email,
            id: user._id
          },
          token: token
        });
      })
    })
  })
})

router.get('/profile', isAuthenticated, (req, res, next) => {
  console.log(req.user);
  res.send({})

})
/* To update current user profile */
router.post('/update-profile', isAuthenticated, ValidateUpdateUser, UserUpdate)

/* To get current user profile */
router.get('/getprofile', isAuthenticated, getProfile)





module.exports = router;
