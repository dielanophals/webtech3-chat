const express = require('express');
const router = express.Router();
const messagesControler = require("../../../controllers/api/v1/users");

router.get("/", messagesControler.getUsers);
module.exports = router;