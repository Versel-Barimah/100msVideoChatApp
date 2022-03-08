
import express from 'express';
const router = express.Router();

// const VideoController = require('./controllers/100ms.controller');
import VideoController from './controllers/100ms.controller.js'

router.get('/', [VideoController.createMeeting]);
router.post('/join', [VideoController.JoinRoom]);

// module.exports = router
export default router;