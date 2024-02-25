const path = require('path');
const rootDir = require('../util/path');


exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'contact-us.html'));
};

exports.postContactUs = (req, res, next) => {
    console.log('Submitted Data:', req.body);
    res.redirect('/contact-us/success');
};

exports.getSuccessPage =(req, res, next) => {
    res.send("Form successfuly filled")
};