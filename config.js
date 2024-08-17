const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env

const MONGO_URI = process.env.MONGO_URI; // Access the MONGO_URI from the .env file

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});
