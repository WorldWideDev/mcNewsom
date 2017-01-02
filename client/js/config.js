var mcNewsom = angular.module('mcNewsom', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

mcNewsom.config(function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController',
        controllerAs: 'HC'
    })
    .when('/home/:id', {
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
        controller: 'DefaultController',
        controllerAs: 'DC'
    })
    .when('/registry', {
        templateUrl: 'partials/registry.html',
        controller: 'DefaultController',
        controllerAs: 'DC'
    })
    .when('/selfiez', {
        templateUrl: 'partials/selfiez.html',
        controller: 'DefaultController',
        controllerAs: 'DC'
    })
    .when('/events', {
        templateUrl: 'partials/events.html',
        controller: 'DefaultController',
        controllerAs: 'DC'
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
