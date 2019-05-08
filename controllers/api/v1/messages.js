const Message = require('../../../models/Message');
const getAll =  (req, res)=>{
    Message.find({"user":"Aqsa"}, (err, doc)=>{
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
    message.user= req.body.user,
    message.completed= req.body.completed;
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