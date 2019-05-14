const Message = require('../../../models/Message');

const getAll = (req, res)=>{
    Message.find({"sender":req.user._id, "receiver": "5cd9f9c07addb75fc2cd177f"}, (err, doc) => {
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "messages": doc
                }
            });
        }
    })
}

const create = (req, res)=>{
    let message = new Message();
    console.log(req.body);
    message.text= req.body.text,
    message.sender= req.user._id,
    message.receiver= "5cd9f9c07addb75fc2cd177f";
    message.save((err, doc)=> {
        if(err){
            res.json({
                "status": "error",
                "message": "echt om te wenen dit"
            });
        }
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "messages": doc
                }
            });
        }
    });
}

module.exports.getAll = getAll;
module.exports.create = create;