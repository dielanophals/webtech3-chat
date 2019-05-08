const express = require('express');
const router = express.Router();
const messagesControler = require("../../../controllers/api/v1/messages");

router.post("/", messagesControler.getAll);

router.get("/", messagesControler.create);
module.exports= router;