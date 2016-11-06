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
    return factory;
})
