const express = require('express');
const app = express();
require('./config'); // Import the config.js to establish MongoDB connection

const MyModel = require('./schema');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/post', async (req, res) => {
    let result = new MyModel(req.body);
    result = await result.save();
    res.send(result);
});

app.listen(4000, (err) => {
    if (err) {
        console.log('Error starting the server');
    } else {
        console.log('Server running on port 4000');
    }
});
