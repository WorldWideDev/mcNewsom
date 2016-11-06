var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//require('./server/config/mongoose.js');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/client'));
//require('./server/config/routes.js')(app);

var server = app.listen(3030, function(){
    console.log('its the year 3030');
});
