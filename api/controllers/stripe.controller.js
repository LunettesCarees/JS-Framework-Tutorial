const stripeServices = require('../services/stripe.services');

exports.createPaymentSession = (req, res, next) => {
    stripeServices.createSession({ priceId: req.body.priceId }, (response) => {
        if (response.error) {
            return res.status(500).json({ error: response.error });
        }
        return res.status(200).json(response);
    });
};
