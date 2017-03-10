(function() {
	'use strict';

	/* Header Directives */
	var headerDirectives = angular.module(
			'com.findmutuals.footer.directives', []);

	/* Create edms-header directive to show top section */
	headerDirectives.directive('footer', function() {
		return {
			restrict : 'E',
			controller : 'loginController',
			controllerAs : 'loginController',
			templateUrl : 'components/footer/footer.html'
		};
	});
})();
