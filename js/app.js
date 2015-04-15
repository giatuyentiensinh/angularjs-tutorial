var app = angular.module('App', ['ui.router', 'App.controller']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('main', {
			url: "/main",
			abstract: true,
			templateUrl: "tpl/factory.html",
			controller: 'AppCtrl'
		})
		.state('main.home', {
			url: '/home',
			views: {
				'leftMenu': {
					templateUrl: "tpl/left1.html"
				},
				'main': {
					templateUrl: "tpl/main1.html"
				}
			}
		})
		.state('main.about', {
			url: '/about',
			views: {
				'leftMenu': {
					templateUrl: "tpl/left2.html"
				},
				'main': {
					templateUrl: "tpl/main2.html"
				}
			}
		})
		.state('main.contact', {
			url: '/contact',
			views: {
				'leftMenu': {
					templateUrl: "tpl/left3.html"
				},
				'main': {
					templateUrl: "tpl/main3.html"
				}
			}
		});

		$urlRouterProvider.otherwise("main/home");

});