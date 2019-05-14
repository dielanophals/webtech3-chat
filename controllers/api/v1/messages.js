const Message = require('../../../models/Message');

const getMessages = (req, res) => {
    let receiver = req.params.id;

    Message.find({
        $or: [
            {
                $or: [{
                    "sender": req.user._id,
                    "receiver": receiver
                }]
            },{
                $or: [{
                    "sender":receiver,
                    "receiver": req.user._id
                }]
            }
        ]}, (err, doc) => {
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

const getAllMessages = (req, res) => {
    Message.find((err, doc) => {
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

const create = (req, res) => {
    let message = new Message();
    console.log(req.body);
    message.text= req.body.text,
    message.sender= req.user._id,
    message.receiver= req.body.receiver;
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

module.exports.getMessages = getMessages;
module.exports.getAllMessages = getAllMessages;
module.exports.create = create;