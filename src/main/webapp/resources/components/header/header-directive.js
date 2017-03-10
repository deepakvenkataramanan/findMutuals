(function() {
	'use strict';

	/* Header Directives */
	var headerDirectives = angular.module(
			'com.findmutuals.header.directives', []);

	/* Create edms-header directive to show top section */
	headerDirectives.directive('navHeader', function() {
		return {
			restrict : 'E',
			controller : 'loginController',
			controllerAs : 'loginController',
			templateUrl : 'components/header/header.html'
		};
	});
})();
