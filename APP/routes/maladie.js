var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/maladie/:id', function(req, res, next) {
  res.render('maladie', { requete_param: req.id });
});

module.exports = router;
