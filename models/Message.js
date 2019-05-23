//datastructuur (MVC structuur => moduls, views en controllers)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    sender: String,
    receiver: String
});
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;