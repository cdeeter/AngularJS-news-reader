angular.module('zyringApp').factory('Category', function ($resource) {
    return $resource('http://farnsworth.zyring.com/categories/:categoryId');
});