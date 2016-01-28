'use strict';

/**
 * Controller for the Category page
 */
angular.module('zyringApp').controller('CategoryCtrl', function ($scope, $routeParams, Category) {
    var categoryName = $routeParams.category.toLowerCase();
    
    $scope.categoryName = $routeParams.category;
    
    $scope.categoryArticles = Category.get({categoryId: categoryName});
    
    $scope.categoryArticles.$promise.then(function(result) {
        var articles = result.items;
        angular.forEach(articles, function(article) {
            if (article.summary.length > 300) {
                article.summary = article.summary.substr(0, 300) + "...";
            }
            if (article.thumbnail === 'none') {
                delete article.thumbnail;
            }
        });
        
        $scope.articles = articles;
    });
    
    $scope.searchKeyword = function(item) {
        $scope.articleSearch = item;
        $("html, body").animate({
            scrollTop: $("#category-container").offset().top
        }, 500);
    }
});