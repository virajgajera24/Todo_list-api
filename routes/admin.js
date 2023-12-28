var express = require('express');
var router = express.Router();
var {register,login,add_emp,view_emp,manage_select_emp,manage_update_emp,add_task,view_task,manage_task} = require('../controller/admincontroller')
/* GET users listing. */
router.post('/', register);
router.get('/login', login);
router.post('/add_emp', add_emp);
router.get('/view_emp', view_emp);
router.get('/manage_select_emp/:id', manage_select_emp);
router.post('/manage_select_emp/:id', manage_update_emp);
router.post('/add_task', add_task);
router.get('/view_task', view_task);
router.post('/manage_task/:user_id', manage_task);

module.exports = router;
