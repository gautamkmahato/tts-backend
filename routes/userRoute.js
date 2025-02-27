import express from 'express';
import addUser from '../controllers/userController.js';

const router = express.Router();
router.use(express.json());

router.post('/', addUser);


export default router;