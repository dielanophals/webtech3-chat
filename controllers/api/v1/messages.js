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