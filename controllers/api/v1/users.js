const User = require('../../../models/User');

const getUsers =  (req, res)=>{
    User.find((err, doc) => {
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "users": doc
                }
            });
        }
    })
}

module.exports.getUsers = getUsers;