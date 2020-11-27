var Notfication = require('../models/notification');




async function getMyNotifications(req, res, next) {
    try {
        var notifications = await Notfication.find({ user_id: req.user._id }).sort({ updatedAt: -1 });
        var unread_count = notifications.filter(n => !n.is_read).length;
        return res.status(200).send({notifications, unread_count});
    } catch (error) {
        console.log(error);
        return res.status(200).send([]);
    }

}

async function deleteNotification(req, res, next) {
    try {
        var notifications = await Notfication.findOneAndDelete({ user_id: req.user._id, })
        return res.send({ success: true })
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}

async function readAllMyNotication(req, res, next) {
    try {
        var notification = await Notfication.updateMany({ user_id: req.user._id }, { $set: { is_read: true } });
        return res.status(200).send({ success: true })
    } catch (error) {
        return res.send({ success: false, error: error })
    }
}

module.exports = {
    getMyNotifications,
    deleteNotification,
    readAllMyNotication
}