var mongoose = require('mongoose'),
    Invitee = mongoose.model('Invitee');

module.exports = (function(){
    return {
        create: function(){
            var newInvitee = new Invitee({
                firstName: 'Billy Joe',
                lastName: 'Hobart',
                isSolo: false,
                plusOne.firstName: 'Dolly',
                plusOne.lastName: 'Parton'
            })
            newInvitee.save(function(err){
                if(err){
                    console.log('somethings amiss');
                }else{
                    console.log('you added an Invitee');
                }
            })
        }
    }
})()
