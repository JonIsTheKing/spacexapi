const User = require('../models/model');
const Abb = require('../models/abb');
const topics = require('../models/topicname');

const getnow = async (req, res)=>{
    try {
        const topicNumber = req.topicnumber;
        const skip_pages = ((req.pagenumber)-1)*5;
        const topicname = topics[topicNumber-1];

        const data = await User.find()
                            .where('topic').equals(topicNumber)
                            .skip(skip_pages)
                            .limit(5)
        
        const prev = req.pagenumber > 1 ? req.pagenumber-1 : 1;
        const next = req.pagenumber > 0 ? (data.length < 5 ? 1: req.pagenumber+1): 1;
        const plink = '/com' + '/' + topicNumber + '/' + prev;
        const nlink = '/com' + '/' + topicNumber + '/' + next;

        console.log('topicNumber', topicNumber, 'skip_pages', skip_pages, 'prev', prev, 'next', next, plink, nlink, data.length);
        
        if(data.length){
            res.json({
                status: 'success',
                topicname,
                data,
                plink,
                nlink,
                skip_pages
            });
        } else {
            res.json({
                status: 'pass',
                plink,
                comment: 'Currently no questions available'
            })
        };
    } catch{
        res.json({ status: 'fail', comment: 'Server error'});
    }
};

module.exports = {getnow};