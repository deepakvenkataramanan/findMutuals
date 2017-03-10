(function() {
	'use strict';

	/* Header Directives */
	var loginPageDirectives = angular.module(
			'com.login.page.directives', []);

	/* Create edms-header directive to show top section */
	loginPageDirectives.directive('loginPage', function() {
		return {
			restrict : 'E',
			controller : 'loginController',
			controllerAs : 'loginController',
			templateUrl : 'login/login.html'
		};
	});
})();
