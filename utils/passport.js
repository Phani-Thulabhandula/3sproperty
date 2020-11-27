const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}

passport.use('local', new LocalStrategy(
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


opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use('jwt', new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload.id }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

passport.serializeUser((user, done) => {
    console.log('Inside serializeUser callback. User id is save to the session file store here', user._id)
    return done(null, user._id);
});
// passport.deserializeUser(Account.deserializeUser());
passport.deserializeUser(async (id, done) => {
    console.log('Inside deserializeUser callback')
    console.log(`The user id passport saved in the session file store is: ${id}`)
    var user = await User.findOne({ _id: id }).exec();
    done(null, user);
});