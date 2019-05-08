const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: String,
    user: String,
    completed: Boolean
});
const Message = mongoose.model("Message", messageSchema);

const getAll =  (req, res)=>{
    res.json({
        "status": "succes",
        "data":{
            "message":{
                "text": "jowwkes",
            }
        }
    });
}

const create = (req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "messages": []
        }
    });
}

module.exports.getAll = getAll;
module.exports.create = create;