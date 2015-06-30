var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gene/:id', function(req, res, next) {
  res.render('gene', { req.param("id")});
  res.render('gene', { req.param("id")});
});

module.exports = router;
