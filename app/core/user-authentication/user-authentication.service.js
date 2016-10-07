//(function () {
//    'use strict';
//
//    var userAuthenticationModule = angular.module('core.userAuthentication', []);
//
//    /**
//     * The `UserLoginService` service allows for logging in and out of the application
//     *
//     * @param {*} message Message to be logged.
//     */
//    userAuthenticationModule.factory('UserLoginService', ['$http', '$localStorage',
//	function ($http, $localStorage) {
//	    return function (username, password, callback) {
//		$http.post('/api/authenticate', {username: username, password: password})
//			.success(function (response) {
//			    // login successful if there's a token in the response
//			    if (response.token) {
//				// store username and token in local storage to keep user logged in between page refreshes
//				$localStorage.currentUser = {username: username, token: response.token};
//
//				// add jwt token to auth header for all requests made by the $http service
//				$http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
//
//				// execute callback with true to indicate successful login
//				callback(true);
//			    } else {
//				// execute callback with false to indicate failed login
//				callback(false);
//			    }
//			});
//	    }
//	}
//    ]);
//
//})();

(function () {
    'use strict';
 
    angular
        .module('core.userAuthentication')
        .factory('AuthenticationService', Service);
 
    function Service($http, $localStorage, $rootScope) {
        var service = {};
 
        service.Login = Login;
        service.Logout = Logout;
 
        return service;
 
        function Login(username, password, callback) {
            $http.post('/api/authenticate', { username: username, password: password })
                .success(function (response) {
                    // login successful if there's a token in the response
                    if (response.token) {
                        // store username and token in local storage to keep user logged in between page refreshes
                        $localStorage.currentUser = {
							username: username, 
							userId:response.userId, 
							token: response.token,
							firstName: response.firstName,
							lastName: response.lastName,
							isUserLoggedIn: true
						    };

//			$rootScope.globals = {
//			    currentUser: {
//				username: username,
//				userId: response.userId,
//				firstName: response.firstName,
//				lastName: response.lastName,
//				isUserLoggedIn: true
//			    }
//			};
 
                        // add jwt token to auth header for all requests made by the $http service
                        $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
 
                        // execute callback with true to indicate successful login
                        callback(true);
                    } else {
                        // execute callback with false to indicate failed login
                        callback(false);
                    }
                });
        }
 
        function Logout() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
    }
})();