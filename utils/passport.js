const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user')


passport.use(new LocalStrategy(
    { usernameField: 'email' }, async (email, password, done) => {
        console.log('Inside local strategy callback')
        try {
            var user = await User.findOne({ email: email }).exec();
            console.log(user);
            return user.comparePassword(password, (err, isMatch) => {
                console.log(err, isMatch);
                if (err) {
                    return done(err)
                }
                return done(null, user);
            });
        } catch (error) {
            return done(error);
        }

    })
)

passport.serializeUser( (user, done) => {
    console.log('Inside serializeUser callback. User id is save to the session file store here', user._id)
    return done(null, user._id);
});
// passport.deserializeUser(Account.deserializeUser());
passport.deserializeUser(async (id, done) => {
    console.log('Inside deserializeUser callback')
    console.log(`The user id passport saved in the session file store is: ${id}`)
    var user = await User.findOne({ _id: id }).exec();
    console.log(user);
    
    done(null, user);
});