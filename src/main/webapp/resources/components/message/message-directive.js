(function() {
	'use strict';

	/* Message Directives */
	var messageDirectives = angular.module(
			'com.doc.ui.components.message.directives', []);

	/* Create alert-messages directive to show alert messages top section */
	messageDirectives.directive('alertMessages', function() {
		return {
			restrict : 'E',
			controller : 'messageController',
			templateUrl : 'components/message/alert.html'
		};
	});

	/* Create error-messages directive to show error messages top section */
	messageDirectives.directive('errorMessages', function() {
		return {
			restrict : 'E',
			controller : 'messageController',
			templateUrl : 'components/message/error.html'
		};
	});
})();
