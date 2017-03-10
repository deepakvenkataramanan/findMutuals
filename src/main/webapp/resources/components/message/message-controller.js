(function() {
	'use strict';

	/**
	 * Controllers for Messages functionality
	 */
	var messageControllers = angular.module(
			'com.doc.ui.components.message.controllers',
			[ 'com.doc.ui.components.message.services' ]);

	/**
	 * Handle all the messages related functionality in this controller
	 */
	messageControllers.controller('messageController', [ '$log',
			'messageService', function($log, messageService) {
				$log.log("Message controller initialized...");

				/**
				 * Remove the passed info message
				 */
				this.removeInfo = function(index) {
					$log.log('Clear alert message at index: ' + index);
					messageService.removeInfo(index);
				};

				/**
				 * Remove the passed error message
				 */
				this.removeError = function(index) {
					$log.log('Clear error message at index: ' + index);
					messageService.removeError(index);
				};
			} ]);
})();
