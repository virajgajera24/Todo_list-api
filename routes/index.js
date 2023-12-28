var express = require('express');
var router = express.Router();
var {login,dashboard,magtask} = require('../controller/indexcontroller');
/* GET home page. */
router.get('/', login)
router.get('/dashboard', dashboard)
router.post('/magtask/:status/:id', magtask)

module.exports = router;
