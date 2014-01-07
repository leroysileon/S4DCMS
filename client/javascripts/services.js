"use strict";

angular.module('myApp.services', ['ngResource'])

	.factory('pagesService', ['$resource', '$http',
		function ($resource) {
			var actions = {
					'get' : {method: 'GET'},
					'save' : {method: 'POST'},
					'update' : {method: 'PUT'},
					'query' : {method: 'GET', isArray: true},
					'delete' : {method: 'DELETE'}
				},
				db = {};
			// REST url to server
			db.pages = $resource('/pages/:_id', {}, actions);
			return db;
				
		}
	])
	
	.factory('blogsService', ['$resource', '$http',
		function ($resource) {
			var actions = {
					'get' : {method: 'GET'},
					'save' : {method: 'POST'},
					'update' : {method: 'PUT'},
					'query' : {method: 'GET', isArray: true},
					'delete' : {method: 'DELETE'}
				},
				db = {};
			// REST url to server
			db.blogs = $resource('/blogs/:_id', {}, actions);
			return db;
				
		}
	])
;