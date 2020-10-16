
/* This middleware will check if the user is authenticated or not */
function isAuthenticated(req, res, next) {
    console.log("IS AUTHENTICATED",req.isAuthenticated() );
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(401).send({
        success: false,
        message: "User is not authorized to perform this operation."
    })
}

module.exports = {
    isAuthenticated
}