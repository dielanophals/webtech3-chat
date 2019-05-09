const User = require('../models/User');


const signup = async (req, res, next)=>{
    console.log(req.body);
    let username = req.body.username; //kan ook uit UI ipv postman
    let password = req.body.password;
    const user = new User({username: username});
    await user.setPassword(password);
    await user.save().then(result =>{
        res.json({
            "status": "succes"
        })
    }).catch(error =>{
        res.json({
            "status": "error"
        })
    });

};

const login = async (req, res, next) =>{
    //checkt ofdat het passwooord en user overeenkomen
    const { user } = await User.authenticate()(req.body.username, req.body.password).then(result =>{
        res.json({
            "status": "succes",
            "data": {
            "user": result
            }
        })
    }).catch(error =>{
        res.json({
            "status": "error"
        })
    });
}

module.exports.signup = signup;
module.exports.login = login;