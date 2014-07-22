angular.module('joansApp', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			// controller: 'mainCtrl',
			templateUrl: 'templates/home.html'
		})
});