const passport = require('passport');
const User = require('../models/User');
const config = require('config');
// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
//heeft vooral te maken met beveiligen van routes
//omdat we met APIs werken gaan we niet controlleren of we in een bepaalde sessie zitten.
passport.use(User.createStrategy());

//voor sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// webtoken strategy
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get("jwt.secret");

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.uid}, function(err, user) {
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

module.exports = passport;