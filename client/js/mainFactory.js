mcNewsom.factory('MainFactory', function($http){
    var factory = {};
    factory.index = function(callback){
        $http.get('invitees/index').success(function(meow){
            callback(meow);
        })
    }
    factory.create = function(newInvitee, callback){
        $http.post('invitees/create', newInvitee).success(function(meow){
            callback(meow);
        });
    }
    factory.checkName = function(thisInv, callback){
        console.log(thisInv, 'is user to check');
        $http.post('invitees/checkName', thisInv).success(function(meow){
            callback(meow);
        })
    }
    factory.toRSVP = function(id, rsvp, callback){
        console.log(id, rsvp, 'is factory data');
        $http.post('responses/create/' + id, rsvp).success(function(meow){
            callback(meow);
        })
    }
    factory.addPeople = function(){
        $http.get('invitees/addPeople');
    }
    return factory;
})
