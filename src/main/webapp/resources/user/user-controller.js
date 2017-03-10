(function() {
	'use strict';

	var welcomeControllers = angular.module(
			'com.findmutuals.register.controller', []);

	welcomeControllers.controller('registerController', [
			'$scope',
			'$window',

			function($scope, $window) {
				
				$scope.status1 = {
					    isCustomHeaderOpen: false,
					    open:false,
					    isFirstOpen: true,
					    isFirstDisabled: false
					  };
				
				$scope.status2 = {
					    isCustomHeaderOpen: false,
					    open:false,
					    isFirstOpen: true,
					    isFirstDisabled: false
					  };
				
				
			} ]);
	


})();
