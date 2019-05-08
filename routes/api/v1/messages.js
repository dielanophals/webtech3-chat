const express = require('express');
const router = express.Router();
const messagesControler = require("../../../controllers/api/v1/messages");

router.post("/",messagesControler.getAll);

router.get("/", (req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "messages": []
        }
    });
});
module.exports= router;