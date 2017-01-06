var mongoose = require('mongoose'),
    createThem = require('../../dev/createInvitees.js')
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
        addPeople: function(req,res){
            createThem();
        },
        noResponse: function(req, res){
            Invitee.find({hasRsvp: false}, function(err, noReponses){
                if(err){
                    res.json(err);
                }else{
                    res.json(noReponses);
                }
            })
        },
        checkName: function(req, res){
            console.log(req.body);
            var guestStatus = {};
            Invitee.findOne({firstName: req.body.firstName, lastName: req.body.lastName}, function(err, person){
                if(err){
                    res.json(err);
                }else{
                    if(person){

                        // check to see if this person has plus one that has already rsvpd
                        if(person.hasPlus){
                            Invitee.findOne({firstName: person.firstNamePlus, lastName: person.lastNamePlus}, function(err, guest){
                                if(err)
                                    res.json(err)
                                else{
                                    console.log('bout to return some json');
                                    res.json({
                                        "person": person
                                    });
                                }
                            })
                        } else {
                            console.log('bout to return some json');
                            res.json({
                                "person": person,
                                "guestStatus": "no guest"
                            });
                        }

                    }else{
                        res.json({"Error": "No one here with that name!"})
                    }
                }
            })
        },
        // checkFirstName: function(req,res){
        //     console.log(req.body);
        //     Invitee.findOne({firstName: req.body.firstName}, function(err, person){
        //         if(err){
        //             res.json(err)
        //         }else{
        //             if(person){
        //                 res.json(person)
        //             }else{
        //                 res.json({"Error": false})
        //             }
        //         }
        //     })
        // }
    }
})()
