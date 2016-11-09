mcNewsom.factory('AdminFactory', function($http){
    var factory = {};
    factory.index = function(callback){
        $http.get('responses/index').success(function(meow){
            callback(meow);
        })
    }
    factory.findNoResponse = function(callback){
        $http.get('invitees/noResponse').success(function(meow){
            callback(meow);
        })
    }
    return factory
})
