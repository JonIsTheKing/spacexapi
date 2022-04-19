const express = require('express');
const service = require('../service/compService');
const router = express.Router();

router.get('/:topic/:page', (req, res, next)=>{
    const Page = parseInt(req.params.page);
    const Topic = parseInt(req.params.topic);

    if((!Page) || (!Topic)){
        res.json({
            status: 'success',
            comment: 'Please enter correct page'
        });
    } else {
        req.pagenumber = Page;
        req.topicnumber = Topic;
        next();
    }}, service.getnow);

router.use('*', (req, res)=>{
    res.json({
        status: 'fail',
        comment: 'Route not defined yet'
    });
});

module.exports = router;