var treeApp = angular.module('treeApp', ['treeCtrl','ui.bootstrap', 'ui.router', 'ngResource']);



treeApp.config([
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/views/about.html'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'app/views/contact.html'
		})
		.state('gallery', {
			url: '/gallery',
			templateUrl: 'app/views/gallery.html'
		})
		.state('services', {
			url: '/services',
			templateUrl: 'app/views/services.html'
		})
		.state('thanks', {
			url: '/thanks',
			templateUrl: 'app/views/landings/thanks.html'
		})
		.state('landing', {
			url: '/landing',
			templateUrl: 'app/views/landings/landing.html'
		})
		.state('404', {
			url: '/404',
			templateUrl: 'app/views/404.html'
		})

		$locationProvider.html5Mode(true);
	}

]);