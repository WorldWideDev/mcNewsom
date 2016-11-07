var mcNewsom = angular.module('mcNewsom', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

mcNewsom.config(function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'MainController',
        controllerAs: 'MC'
    })
    .when('/rsvp', {
        templateUrl: 'partials/rsvp.html',
        controller: 'MainController',
        controllerAs: 'MC'
    })
    .otherwise({
        templateUrl: 'partials/home.html',
        controller: 'MainController',
        controllerAs: 'MC'
    })
})
