'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
    .controller('MainCtrl', function ($scope) {
        $scope.newsCategories = [
            {"name": "Design", "image": "images/design.jpg"},
            {"name": "Gaming", "image": "images/gaming.jpg"},
            {"name": "Tech", "image": "images/technology.jpg"},
            {"name": "Science", "image": "images/science.jpg"},            
            {"name": "Finance", "image": "images/finance.jpg"},
            {"name": "Business", "image": "images/business.jpg"},
            {"name": "Travel", "image": "images/travel.jpg"},
            {"name": "Cinema", "image": "images/cinema.jpg"},
            {"name": "Sports", "image": "images/sports.jpg"}
        ]
    });
