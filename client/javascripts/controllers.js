"use strict";

function PageListCtrl($scope, pagesService) {
	$scope.pages = pagesService.pages.get();
}

function PageDetailCtrl($scope, $routeParams, $location, pagesService) {
    $scope.pages = pagesService.pages.get({_id: $routeParams._id}, function () {
    	console.log('$scope.request ', $scope.request);
    });

    $scope.delete = function () {
    	pagesService.pages.delete({_id: $routeParams._id});
    	$location.path("/pages");
    }

    $scope.save = function () {
    	if ($scope.pages.doc && $scope.pages.doc._id !== undefined) {
    		console.log('Entering update');
    		pagesService.pages.update({_id: $scope.pages.doc._id}, $scope.pages.doc, function (res) {
    			console.log(res);
    		});
    	} else {
    		console.log('Entering update');
    		pagesService.pages.save({}, $scope.pages.doc, function (res) {
    			console.log(res);
    		});
    	}
    }
}

function BlogListCtrl($scope, blogsService) {
	$scope.blogs = blogsService.blogs.get();
}

function BlogDetailCtrl($scope, $routeParams, $location, blogsService) {
    $scope.blogs = blogsService.blogs.get({_id: $routeParams._id}, function () {
    	console.log('$scope.request ', $scope.request);
    });

    $scope.delete = function () {
    	blogsService.blogs.delete({_id: $routeParams._id});
    	$location.path("/blogs");
    }

    $scope.save = function () {
    	if ($scope.blogs.doc && $scope.blogs.doc._id !== undefined) {
    		console.log('Entering update');
    		blogsService.blogs.update({_id: $scope.blogs.doc._id}, $scope.blogs.doc, function (res) {
    			console.log(res);
    		});
    	} else {
    		console.log('Entering update');
    		blogsService.blogs.save({}, $scope.blogs.doc, function (res) {
    			console.log(res);
    		});
    	}
    }
}
