'use strict';

// Register `dashboard` component, along with its associated controller and template
angular.
	module('dashboard').
	component('dashboard', {
	    templateUrl: 'dashboard/dashboard.template.html',
	    controller: ['$routeParams', 
		function PhoneDetailController($routeParams) {
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
