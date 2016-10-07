'use strict';

angular.
	module('phonecatApp').
	config(['$locationProvider', '$routeProvider',
	    function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.
			when('/', {
			    template: '<phone-list></phone-list>'
			}).
			when('/phones', {
			    template: '<phone-list></phone-list>'
			}).
			when('/phones/:phoneId', {
			    template: '<phone-detail></phone-detail>'
			}).
			when('/login', {
			    template: '<login></login>'
			}).
			when('/dashboard', {
			    template: '<dashboard></dashboard>'
			}).
			otherwise('/phones');
	    }
	]).
	run(['$rootScope', '$http', '$location', '$localStorage',
	    function fnRun($rootScope, $http, $location, $localStorage) {

		// keep user logged in after page refresh
		if ($localStorage.currentUser) {
		    $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
		}

		//$rootScope.globals = $rootScope.globals ? $rootScope.globals : {};

		// redirect to login page if not logged in and trying to access a restricted page
		$rootScope.$on('$locationChangeStart', function (event, next, current) {
		    var publicPages = ['/','/phones','/login'];
		    var restrictedPage = publicPages.indexOf($location.path()) === -1;
		    if (restrictedPage && !$localStorage.currentUser) {
			$location.path('/login');
		    }
		});

	    }
	]);
