require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/app.routes');

const corsOpt = {
    origin: 'https://js-framework-tutorial-stripe.onrender.com',
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin', 'Origin'],
};

app.use(cors(corsOpt));
app.use(express.json());
app.use("/api", routes);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

// const express = require('express');
// const app = express();
// const cors = require('cors');

// // Replace with your frontend URL on Render
// const frontendURL = 'https://your-frontend-service.onrender.com';

// const corsOptions = {
//     origin: frontendURL,  // Allow only your frontend domain
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Specify allowed methods
//     allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin', 'Origin', 'Authorization'],  // Add any additional headers your application uses
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use("/api", require("./routes/app.routes"));

// app.listen(4000, () => {
//     console.log("Server is running on port 4000");
// });

const STRIPE_CONFIG = {
    SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    CURRENCY: process.env.STRIPE_CURRENCY,
    SUCCESS_URL: process.env.STRIPE_SUCCESS_URL,
    CANCEL_URL: process.env.STRIPE_CANCEL_URL
};

module.exports = {
    STRIPE_CONFIG
};