var mcNewsom = angular.module('mcNewsom', ['ngRoute'])
console.log('in angular config');

mcNewsom.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController',
        controllerAs: 'MC'
    })
})
