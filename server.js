const express = require('express');
const colors = require('colors');
const moragan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// dotenv config
dotenv.config();

// mongodb connection 
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(moragan("dev"));

// routes
app.get('/', (req, res) => {
    res.status(200).send({
        message: "Server running",
    });
});

// routes
app.use('/api/v1/users', require('./routes/userRoutes'));

// port
const port = process.env.PORT || 8080;

// listen to port
app.listen(port, () => {
    console.log(`Server running on port ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
        .bgCyan.white
    );
});

