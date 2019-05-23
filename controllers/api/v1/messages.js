const Message = require('../../../models/Message');

const getGroup = (req, res) => {
    let receiver = "group";
    Message.find({
            "receiver": receiver
        }, (err, doc) => {
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

const getAll = (req, res) => {
    let receiver = req.params.id;
    Message.find({
        $or: [
            {
                $or: [{
                    "sender":req.user._id,
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

const removeMessage = (req, res) => {
    let messageId = req.params.id;

    Message.findOneAndDelete({
        _id: messageId
    }).then(result => {
        res.json({
            "status": "success",
            "data": "ja dag he"
        })
    }).catch(err => {
        res.json(err)
    })
}

module.exports.getGroup = getGroup;
module.exports.getAll = getAll;
module.exports.create = create;
module.exports.removeMessage = removeMessage;