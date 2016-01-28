'use strict';

/*
 * Routes for main module of the application.
 */
angular.module('zyringApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    .when('/:category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
