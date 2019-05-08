const express = require('express');
const router = express.Router();

router.post("/", (req, res)=>{
    res.json({
        "status": "succes",
        "data":{
            "message":{
                "text": "jowwkes",
            }
        }
    });
});

router.get("/", (req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "messages": []
        }
    })
})