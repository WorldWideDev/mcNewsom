mcNewsom.factory('RsvpFactory', function($http, $uibModal){
    var factory = {};
    factory.index = function(callback){
        $http.get('invitees/index').then(function(meow){
            callback(meow);
        })
    }
    factory.checkName = function(thisInv, callback){
        $http.post('invitees/checkName', thisInv).then(function(meow){
            callback(meow);
        })
    }
    factory.toRSVP = function(id, rsvp, callback){
        $http.post('responses/create/' + id, rsvp).then(function(meow){
            callback(meow);
        })
    }
    factory.addPeople = function(){
        $http.get('invitees/addPeople');
    }
    return factory;
})
