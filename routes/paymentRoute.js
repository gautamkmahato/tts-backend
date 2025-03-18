import express from 'express';
import paymentController, { paymentWebhook } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/create-checkout-session', express.json(), paymentController);

// Use `express.raw()` **only** for the webhook route
router.post('/webhook', express.raw({ type: "application/json" }), paymentWebhook);

export default router;
