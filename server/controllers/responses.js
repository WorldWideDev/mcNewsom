var mongoose = require('mongoose'),
    Invitee = mongoose.model('Invitee'),
    Response = mongoose.model('Response');

module.exports = (function(){
    return {
        index: function(req,res){
            Response.find({}, function(err, responses){
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
                        invitee.hasRsvp = true;
                        invitee.save();
                        var newResponse = new Response({
                            _invitee: invitee._id,
                            isComing: req.body.isComing === 'yes'? true:false,
                            isPlusComing: req.body.isPlusComing === 'yes'? true:false
                        })
                        newResponse.save(function(err){
                            if(err){
                                res.json(err);
                            }else{
                                res.redirect('/responses/index')
                            }
                        })
                    }

                }
            })
        }
    }
})()
