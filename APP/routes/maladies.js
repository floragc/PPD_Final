var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/maladies', function(req, res, next) {
  res.render('maladies', { requete_param: req.id });
});

module.exports = router;
