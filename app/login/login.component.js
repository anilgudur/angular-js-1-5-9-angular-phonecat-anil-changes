'use strict';

// Register `login` component, along with its associated controller and template
angular.
	module('login').
	component('login', {
	    templateUrl: 'login/login.template.html',
	    controller: ['$location', 'AuthenticationService', '$rootScope', 
		function LoginController($location, AuthenticationService, $rootScope) {

		    var vm = this;

		    vm.login = login;

		    initController();

		    function initController() {
			// reset login status
			AuthenticationService.Logout();
			//userMenuProfile.isUserLogedIn = false;
		    };

		    function login() {
			vm.loading = true;
			AuthenticationService.Login(vm.username, vm.password, function (result) {
			    if (result === true) {
				$location.path('/dashboard');
			    } else {
				vm.error = 'Username or password is incorrect';
				vm.loading = false;
			    }
			});
		    };

		}
	    ]
	});
