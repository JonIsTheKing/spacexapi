const express = require('express');
const compController = require('./controller/controller');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/com/', compController);

app.get('*', (req, res) => {
    res.json({
        status: 'pass',
        comment: 'Route not defined yet'
    });
});

module.exports = app;
