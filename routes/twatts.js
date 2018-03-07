var express = require('express');
var router = express.Router();
var { twattProfile, twattTimeHome, twattTimeUser, twattSearch, twattPost } = require('../controllers/twatts')

router.get('/profile', twattProfile)
router.get('/timelinehome', twattTimeHome)
router.get('/timelineuser', twattTimeUser)
router.get('/search', twattSearch)
router.post('/post', twattPost)

module.exports = router;
