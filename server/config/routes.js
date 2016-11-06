var mongoose = require('mongoose'),
    Invitee = mongoose.model('Invitee'),
    invitees = require('../controllers/invitees.js');

module.exports = function(app){
    app.get('/invitees/index', function(req,res){
        invitees.index(req, res);
    })
    app.post('/invitees/create', function(req,res){
        invitees.create(req, res);
    })
}
