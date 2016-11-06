var mongoose = require('mongoose'),
    Invitee = mongoose.model('Invitee'),
    invitees = require('../controllers/invitees.js');

module.exports = function(app){
    app.get('/invitees/create', function(req,res){
        invitees.create();
    })
}
