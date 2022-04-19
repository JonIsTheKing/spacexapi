const express = require('express');
const path = require('path');
const compController = require('./controller/controller');
const app = express();
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
// other app.use() options ...
app.use(expressCspHeader({ 
    policies: { 
        'default-src': [expressCspHeader.NONE], 
        'img-src': [expressCspHeader.SELF], 
    } 
}));

app.use(express.json());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/com/', compController);

app.get('*', (req, res) => {
    res.json({
        status: 'pass',
        comment: 'Route not defined yet'
    });
});

module.exports = app;