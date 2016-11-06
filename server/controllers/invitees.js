var mongoose = require('mongoose'),
    Invitee = mongoose.model('Invitee');

module.exports = (function(){
    return {
        index: function(req,res){
            Invitee.find({}, function(err, invitees){
                if(err){
                    res.json(err);
                }else{
                    res.json(invitees);
                }
            });
        },
        create: function(req,res){
            Invitee.findOne({firstName: req.body.firstName}, function(err, invitee){
                if(err){
                    res.json(err);
                }else{
                    if(invitee){
                        console.log('found existing invitee');
                        res.json(invitee);
                    }else{
                        var newInvitee = new Invitee({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            hasPlus: req.body.hasPlus,
                            firstNamePlus: req.body.firstNamePlus,
                            lastNamePluse: req.body.lastNamePlus,
                        });
                        newInvitee.save(function(err){
                            console.log(newInvitee);
                            if(err){
                                console.log('somethings amiss');
                            }else{
                                res.redirect('/invitees/index')
                            }
                        })
                    }
                }
            })
        }
    }
})()
