const express = require('express');
const router = express.Router();
const messagesControler = require("../../../controllers/api/v1/messages");

router.post("/", messagesControler.create);
router.get("/:id", messagesControler.getAll);
module.exports = router;