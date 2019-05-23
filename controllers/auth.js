const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
//controllers zorgen ervoor dat we de route kunnen matchen met de functie.

const signup = async (req, res, next) => {
    console.log(req.body);
    let username = req.body.username; //kan ook uit UI ipv postman
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let password = req.body.password;
    const user = new User({
        username: username,
        firstname: firstname,
        lastname: lastname
    });
    await user.setPassword(password);
    await user.save().then(result =>{
        let token = jwt.sign({
            uid: result._id,
            username: result.username
        }, config.get('jwt.secret'));

        res.json({
            "status": "succes",
            "data": {
                "token": token
            }
        })
    }).catch(error =>{
        res.json({
            "status": "error"
        })
    });
};

const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        if(!result.user){
            return res.json({
                "status": "failed",
                "message": "Login failed"
            })
        }

        let token = jwt.sign({
            uid: result.user._id,
            username: result.user.username
        }, config.get('jwt.secret'))

        return res.json({
            "status": "success",
            "data":{
                "token": token
            }
        });
    }).catch(error => {
        res.json({
            "status": "error",
            "message": error
        })
    });
};

module.exports.signup = signup;
module.exports.login = login;