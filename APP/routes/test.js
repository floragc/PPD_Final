var express = require('express');
var router = express.Router();
var AzureSearch = require('AzureSearch');

/* GET home page. */
router.get('/test', function(req, res, next) {
    res.render('test', { title: 'Test' });
    
});

module.exports = router;

