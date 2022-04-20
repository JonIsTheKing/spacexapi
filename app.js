const express = require('express');
const path = require('path');
const compController = require('./controller/controller');
const app = express();
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/com/', compController);

app.get('*', (req, res) => {
    res.json({
        status: 'pass',
        comment: 'Route not defined yet'
    });
});

module.exports = app;
