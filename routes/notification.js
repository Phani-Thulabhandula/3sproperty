
var express = require('express');
var router = express.Router();
var passport = require('passport')
var {
    getMyNotifications,
    deleteNotification,
    readAllMyNotication
} = require('../controllers/notification')


router.get('/get', passport.authenticate('jwt'), getMyNotifications);

// router.post('/mark-one-read', passport.authenticate('jwt'), readAllMyNotication);


router.post('/mark-as-read', passport.authenticate('jwt'), readAllMyNotication);

router.post('/delete', passport.authenticate('jwt'), deleteNotification);


module.exports = router;
