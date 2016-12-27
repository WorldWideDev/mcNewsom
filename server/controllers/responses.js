var mongoose = require('mongoose'),
    Invitee = mongoose.model('Invitee'),
    Response = mongoose.model('Response');

module.exports = (function(){
    return {
        index: function(req,res){
            Response.find({}).populate('_invitee').exec(function(err, responses){
                if(err){
                    res.json(err);
                }else{
                    res.json(responses);
                }
            })
        },
        create: function(req,res){
            // update invitee
            console.log(req.body.isComing === 'yes'? true:false);
            Invitee.findOne({_id: req.params.id}, function(err, invitee){
                if(err){
                    res.json(err);
                }else{
                    if(invitee.hasRsvp){
                        res.json({"Error": "You have already RSVP'd!"})
                    }else{
                        console.log(req.body.isPlusComing, 'is isPlusComing');

                        // check to see if invitee has plus one that is sure of status, and then update both statuses
                        if(invitee.hasPlus && req.body.isPlusComing !== "unsure"){
                            Invitee.findOne({firstName: invitee.firstNamePlus, lastName: invitee.lastNamePlus}, function(err, guest){
                                if(err){
                                    res.json(err);
                                }else if(!guest.hasRsvp){
                                    console.log(guest, 'has not rsvd');
                                    var guestResponse = new Response({
                                        _invitee: guest._id,
                                        isComing: req.body.isPlusComing === 'yes' ? true:false,
                                        isPlusComing: req.body.isComing === 'yes'? true:false
                                    })

                                    guestResponse.save(function(err){
                                        if(err)
                                            res.json(err);
                                        else{
                                            guest.hasRsvp = true;
                                            guest._response = guestResponse._id;
                                            guest.save();
                                            console.log("saved guest respnse");
                                        }
                                    })
                                }
                            })
                        }
                        var newResponse = new Response({
                            _invitee: invitee._id,
                            isComing: req.body.isComing === 'yes'? true:false,
                            isPlusComing: req.body.isPlusComing === 'yes'? true:false
                        })
                        newResponse.save(function(err){
                            if(err){
                                res.json(err);
                            }else{
                                invitee.hasRsvp = true;
                                invitee._response = newResponse._id;
                                invitee.save();
                                console.log("saved invitee and main response");
                                res.redirect('/responses/index')
                            }
                        })
                    }

                }
            })
        }
    }
})()
