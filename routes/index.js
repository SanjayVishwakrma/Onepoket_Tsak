var express = require('express');
var router = express.Router();
let controller = require('../controller/controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route to get all users in database
router.get('/stringCount', controller.stringCount);

module.exports = router;
