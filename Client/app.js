var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'IdeasController',
		templateUrl: ''
	})
	.when('/dashboard', {
		templateUrl: 'views/dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
    });
  
});d