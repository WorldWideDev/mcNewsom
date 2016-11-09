var mcNewsom = angular.module('mcNewsom', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

mcNewsom.config(function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'RsvpController',
        controllerAs: 'MC'
    })
    .when('/rsvp', {
        templateUrl: 'partials/rsvp.html',
        controller: 'RsvpController',
        controllerAs: 'MC'
    })
    .when('/admin', {
        templateUrl: 'partials/admin.html',
        controller: 'AdminController',
        controllerAs: 'AC'
    })
    .otherwise({
        templateUrl: 'partials/home.html',
        controller: 'RsvpController',
        controllerAs: 'MC'
    })
})
