
"use strict";

/**
 * @see http://docs.angularjs.org/guide/concepts
 */
angular.module('myApp', [ 'myApp.services'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/pages', {
        	templateUrl: 'partials/page-list.html',
        	controller: PageListCtrl
        });

        $routeProvider.when('/pages/:_id', {
        	templateUrl: 'partials/page-detail.html',
        	controller: PageDetailCtrl
        });        
        
        
        
        $routeProvider.when('/blogs', {
        	templateUrl: 'partials/blog-list.html',
        	controller: BlogListCtrl
        });
        
        $routeProvider.when('/blogs/:_id', {
        	templateUrl: 'partials/blog-detail.html',
        	controller: BlogDetailCtrl
        }); 
        
        
        // When no valid route is provided
        $routeProvider.otherwise({
        	redirectTo: "/pages"
        });

    }]);