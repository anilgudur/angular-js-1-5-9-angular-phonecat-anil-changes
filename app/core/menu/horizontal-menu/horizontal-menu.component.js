'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
	module('core.horizontalMenu').
	component('horizontalMenu', {
	    templateUrl: 'core/menu/horizontal-menu/horizontal-menu.template.html',
	    controller: ['$scope', '$location', 
		function HorizontalMenuController($scope, $location) {

		    $scope.isActive = function (path) {
			var currentPath = $location.path().split('/')[1];
			if (currentPath.indexOf('?') !== -1) {
			    currentPath = currentPath.split('?')[0];
			}
			return currentPath === path.split('/')[1];
		    };

		}
	    ]
	});
