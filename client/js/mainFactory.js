mcNewsom.factory('MainFactory', function($http){
    var factory = {};
    factory.create = function(callback){
        $http.get('invitees/create').success(function(meow){
            callback(meow);
        });
    }
})
