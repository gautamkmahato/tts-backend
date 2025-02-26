import express from 'express';
import generateAudio from '../controllers/audioController.js';

const router = express.Router();
router.use(express.json());

router.post('/generate', generateAudio);


export default router;