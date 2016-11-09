var mongoose = require('mongoose'),
    Invitee = mongoose.model('Invitee'),
    invitees = require('../controllers/invitees.js'),
    responses = require('../controllers/responses.js');


module.exports = function(app){
    app.get('/invitees/index', function(req,res){
        invitees.index(req, res);
    })
    app.post('/invitees/create', function(req,res){
        invitees.create(req, res);
    })
    app.post('/invitees/checkName', function(req,res){
        invitees.checkName(req,res);
    })
    // app.post('/invitees/checkFirstName', function(req,res){
    //     console.log('in routes');
    //     invitees.checkFirstName(req,res);
    // })
    app.get('/invitees/addPeople', function(req,res){
        invitees.addPeople(req,res);
    })
    app.get('/invitees/noResponse', function(req,res){
        invitees.noResponse(req,res);
    })
    app.get('/responses/index', function(req,res){
        responses.index(req,res);
    })
    app.post('/responses/create/:id', function(req,res){
        responses.create(req,res);
    })
}
