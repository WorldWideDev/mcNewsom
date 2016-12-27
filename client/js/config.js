var mcNewsom = angular.module('mcNewsom', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

mcNewsom.config(function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController',
        controllerAs: 'HC'
    })
    .when('/rsvp', {
        templateUrl: 'partials/rsvp.html',
        controller: 'RsvpController',
        controllerAs: 'MC'
    })
    .when('/accomodations', {
        templateUrl: 'partials/accomodations.html',
        controller: 'RsvpController',
        controllerAs: 'AC'
    })
    .when('/registry', {
        templateUrl: 'partials/registry.html',
        controller: 'RsvpController',
        controllerAs: 'RC'
    })
    .when('/admin', {
        templateUrl: 'partials/admin.html',
        controller: 'AdminController',
        controllerAs: 'AC'
    })
    .otherwise({
        templateUrl: 'partials/home.html',
        controller: 'HomeController',
        controllerAs: 'HC'
    })
})
