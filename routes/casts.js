var express = require('express');
var castIO = require('../castIO.js');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/:castId', function(req, res, next) {
    var client = castIO.findClient( req.params.castId );
    if( typeof client === "undefined"){
        res.send("Cast id not found");
    }
    else{
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    }
});

module.exports = router;
