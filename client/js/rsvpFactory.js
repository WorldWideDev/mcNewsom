mcNewsom.factory('RsvpFactory', function($http){
    var factory = {};
    factory.index = function(callback){
        $http.get('invitees/index').then(function(meow){
            callback(meow);
        })
    }
    factory.create = function(newInvitee, callback){
        $http.post('invitees/create', newInvitee).then(function(meow){
            callback(meow);
        });
    }
    factory.checkName = function(thisInv, callback){
        console.log(thisInv, 'is user to check');
        $http.post('invitees/checkName', thisInv).then(function(meow){
            callback(meow);
        })
    }
    // factory.checkFirstName = function(firstName, callback){
    //     console.log(typeof(firstName), 'is factory input');
    //     $http.post('invitees/checkFirstName', firstName).then(function(meow){
    //         callback(meow);
    //     })
    // }
    factory.toRSVP = function(id, rsvp, callback){
        console.log(id, rsvp, 'is factory data');
        $http.post('responses/create/' + id, rsvp).then(function(meow){
            callback(meow);
        })
    }
    factory.addPeople = function(){
        $http.get('invitees/addPeople');
    }
    return factory;
})
