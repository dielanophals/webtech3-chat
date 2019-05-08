var express = require('express');
var router = express.Router();
const authController = require("../controllers/auth");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//signup
//username uit request halen
//wachtwoord uit request halen
//bycrypt
//databank
router.post('/signup', (req,res, next)=>{

});
//router.post('/login',authController.login)
module.exports = router;
