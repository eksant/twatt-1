var express = require('express');
var router = express.Router();
var { twattProfile } = require('../controllers/twatts')

router.get('/profile', twattProfile)

module.exports = router;
