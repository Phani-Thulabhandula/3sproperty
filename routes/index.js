var express = require('express');
var router = express.Router();
var path = require('path')
/* GET home page. */


router.get('/logout', function(req, res){
  req.logout();
  res.send({
    sucess: true
  });
});

router.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'))
});

module.exports = router;
