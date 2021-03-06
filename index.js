var name = 'vipme-oam';
var version = '0.0.1';

//requires
var path = require('path');
var http = require('http');
var fs = require('fs');
var express = require('express');
var request = require('request');

//app
var app = express();

//static
app.use('/s/uae/g/06/', express.static(__dirname));

//layouts
app.use(function(req, res, next){
    var url = req.url.replace(/^\/|\?.*$/g, '');
    url = url || 'index.html';
    var path = __dirname + '/layouts/' + url;
    if(fs.existsSync(path)){
        res.sendfile(path);
    } else if(url === 'index.html') {
        res.send(404);
    } else {
        next();
    }
});

app.listen(process.env.PORT || 4400);
