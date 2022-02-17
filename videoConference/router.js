const express = require("express");
const router = express.Router();

// import controller
const VideoController = require('./controllers/100ms.controller');

router.get('/', [VideoController.createMeeting])

module.exports = router