const express = require('express');
const app = express();
require('./config'); // Import the config.js to establish MongoDB connection

const MyModel = require('./schema');
const cors = require('cors');

app.use(express.json());
const corsOptions = {
    origin: "https://umarstar.github.io/final-year-project/",
    credentials: true,
};

app.use(cors(corsOptions));

app.post('/post', async (req, res) => {
    let result = new MyModel(req.body);
    result = await result.save();
    res.send(result);
});
const port = process.env.PORT || 4000 ;
app.listen(port , (err) => {
    if (err) {
        console.log('Error starting the server');
    } else {
        console.log('Server running on port 4000');
    }
});
