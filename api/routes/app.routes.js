const express = require('express');
const stripeController = require('../controllers/stripe.controller');
const router = express.Router();

router.post('/create-checkout-session', stripeController.createPaymentSession);

module.exports = router;

