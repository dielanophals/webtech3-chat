const passport = require('passport');
const User = require('../models/User');
// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
//heeft vooral te maken met beveiligen van routes
//omdat we met APIs werken gaan we niet controlleren of we in een bepaalde sessie zitten.
passport.use(User.createStrategy());

//voor sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());