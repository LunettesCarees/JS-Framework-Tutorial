const express = require('express');
const app = express();
const cors = require('cors');

const corsOpt = {
    origin: '*',
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin', 'Origin'],
};

app.use(cors(corsOpt));
app.use(express.json());
app.use("/api", require("./routes/app.routes"));

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
