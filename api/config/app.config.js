// const STRIPE_CONFIG = {
//     SECRET_KEY: "sk_test_51NeMVWGtXGgE8I1fyUpTo3P4dF0GAA2cHKjIYALF013cema2BZtajvsYfhFpS0RKRplnYyC8aB0ou2RzMs3BumKl003EhwhNd4",
//     CURRENCY: "CAD",
//     SUCCESS_URL: "http://localhost:4200/success?session_id={CHECKOUT_SESSION_ID}",
//     CANCEL_URL: "http://localhost:4200/payment"
// };

// module.exports = {
//     STRIPE_CONFIG
// };

const STRIPE_CONFIG = {
    SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    CURRENCY: process.env.STRIPE_CURRENCY,
    SUCCESS_URL: process.env.STRIPE_SUCCESS_URL,
    CANCEL_URL: process.env.STRIPE_CANCEL_URL
};

module.exports = {
    STRIPE_CONFIG
};

