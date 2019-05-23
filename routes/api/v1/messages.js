const express = require('express');
const router = express.Router();
const messagesControler = require("../../../controllers/api/v1/messages");

router.post("/", messagesControler.create);
router.get("/", messagesControler.getGroup);
router.get("/:id", messagesControler.getAll);
router.delete("/:id", messagesControler.removeMessage);

module.exports = router;