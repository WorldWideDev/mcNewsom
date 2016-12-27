mcNewsom.factory('AdminFactory', function($http){
    var factory = {};
    factory.index = function(callback){
        $http.get('responses/index').then(function(meow){
            callback(meow);
        })
    }
    factory.findNoResponse = function(callback){
        $http.get('invitees/noResponse').then(function(meow){
            callback(meow);
        })
    }
    return factory
})
