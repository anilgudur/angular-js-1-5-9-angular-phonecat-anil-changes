'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
	module('core.userMenuProfile').
	component('userMenuProfile', {
	    templateUrl: 'core/user/user-menu-profile/user-menu-profile.template.html',
	    controller: ['$location','$localStorage','$rootScope','$scope',
		function UserMenuProfileController($location, $localStorage, $rootScope, $scope) {
		    this.isUserLoggedIn = false;
		    if ($localStorage.currentUser) {
			this.isUserLoggedIn = true;
		    }
		    this.logout = function() {
			this.isUserLoggedIn = false;
			$location.path('/login');
		    }
//		    this.isConnected = function () {
//			return !($rootScope.globals.currentUser);
//		    };

		    $scope.$watch(function () { return $localStorage.currentUser; }, function (newVal, oldVal) {
			$scope.isUserLoggedIn = !($localStorage.currentUser);
		    }, true);

		    //var this.
//		    var self = this;
//		    self.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
//			self.setImage(phone.images[0]);
//		    });
//
//		    self.setImage = function setImage(imageUrl) {
//			self.mainImageUrl = imageUrl;
//		    };
		}
	    ]
	});
