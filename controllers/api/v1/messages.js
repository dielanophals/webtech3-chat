const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: String,
    completed: Boolean
});
const Message = mongoose.model("Message", messageSchema);

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
    message.text="Bak voor mij pannenkoeken aub",
    message.user="Aqsa",
    message.completed= false;
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