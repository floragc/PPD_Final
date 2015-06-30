var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/genes', function(req, res, next) {
  res.render('genes', { requete_param: req.id });
});

module.exports = router;
