var express = require('express');
var router = express.Router();
var { twattProfile, twattTimeHome, twattTimeUser } = require('../controllers/twatts')

router.get('/profile', twattProfile)
router.get('/timelinehome', twattTimeHome)
router.get('/timelineuser', twattTimeUser)

module.exports = router;
