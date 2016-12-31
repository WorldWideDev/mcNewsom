var mongoose = require('mongoose'),
    Invitee = mongoose.model('Invitee'),
    headz = require('./allPeople.json');

function createThem(){
    console.log(headz, 'is heads');
    for(var head = 0; head < headz.people.length; head++){
        var newHead = new Invitee(headz.people[head]);
        newHead.save()
    }
}
module.exports = createThem
