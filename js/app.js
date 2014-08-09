angular.module('joansApp', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			// controller: 'mainCtrl',
			templateUrl: 'templates/home.html'
		})
		.when('/historien', {
			// controller: 'mainCtrl',
			templateUrl: 'templates/historien.html'
		})
		.when('/media', {
			// controller: 'mainCtrl',
			templateUrl: 'templates/media.html'
		})
		.when('/latarna', {
			// controller: 'mainCtrl',
			templateUrl: 'templates/latarna.html'
		})
		.when('/medverkande', {
			// controller: 'mainCtrl',
			templateUrl: 'templates/medverkande.html'
		})
		.when('/kontakt', {
			// controller: 'mainCtrl',
			templateUrl: 'templates/kontakt.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});