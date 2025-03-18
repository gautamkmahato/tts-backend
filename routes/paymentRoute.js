import express from 'express';
import paymentController, { getPaymentStatus, paymentWebhook } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/create-checkout-session', express.json(), paymentController);

// Use `express.raw()` **only** for the webhook route
router.post('/webhook', express.raw({ type: "application/json" }), paymentWebhook);
router.post('/status', express.json(), getPaymentStatus);

export default router;
