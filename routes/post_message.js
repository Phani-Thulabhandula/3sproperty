var express = require('express');
var router = express.Router();
var {
    getMyChats,
    getMyChatMessages,
    sendMyMessages,
    getPostMessages
} = require('../controllers/post_message')
var passport = require('passport')


router.get('/get-my-chats', passport.authenticate('jwt'), getMyChats, (req, res, next) => {
    return res.send({})
});


router.get('/get-my-chats-messages/:chat_id', passport.authenticate('jwt'), getMyChatMessages, (req, res, next) => {
    return res.send({})
});

router.post('/send-my-message', passport.authenticate('jwt'), sendMyMessages);

router.get('/get-post-messages/:post_id', passport.authenticate('jwt'), getPostMessages);

module.exports = router;
