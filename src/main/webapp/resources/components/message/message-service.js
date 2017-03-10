(function() {
	'use strict';

	/* Message Services */
	var messageServices = angular.module(
			'com.doc.ui.components.message.services',
			[ 'com.doc.ui.components.message.constants' ]);

	/**
	 * This service would be used to show alert or error messages on top of the
	 * screen
	 */
	messageServices
			.service(
					'messageService',
					[
							'$rootScope',
							'$interval',
							'$timeout',
							'$log',
							'messageCodesConstant',
							function($rootScope, $interval, $timeout, $log,
									messageCodesConstant) {
								var self = this;
								$rootScope.errors = [];
								$rootScope.alerts = [];
								$rootScope.errorCounter = 0;
								$rootScope.alertCounter = 0;

								/**
								 * Display the error message
								 */
								this.error = function(code, message) {
									// add the message in the queue, but delete
									// after 5 secs.
									$rootScope.errorCounter = $rootScope.errorCounter + 1;
									var errorMessage = {
										index : $rootScope.errorCounter,
										code : code,
										message : message
									};
									var promiseError = $interval(
											new function() {
												$log
														.log('Error - Added new message #'
																+ errorMessage.index
																+ ' '
																+ new Date());
												// push in errors
												$rootScope.errors
														.push(errorMessage);
												$log
														.log('Total Errors: '
																+ $rootScope.errors.length);
												// scroll to the top of window
												$timeout(
														function() {
															if (document
																	&& document.body
																	&& document.documentElement) {
																document.body.scrollTop = document.documentElement.scrollTop = 0
															}
														}, 200);
											},
											messageCodesConstant.ERROR_MESSAGE_RETAIN_INTERVAL,
											1);
									// store this promise in the
									// error object
									// too
									errorMessage.promise = promiseError;

									promiseError
											.then(function() {
												$log
														.log('Error - interval elapsed; removing #'
																+ errorMessage.index
																+ ' '
																+ new Date());
												self
														.removeError(errorMessage.index);
												$log
														.log('Total Errors: '
																+ $rootScope.errors.length);
											});

								};

								/**
								 * Display the alert message
								 */
								this.info = function(code, message) {
									// add the message in the queue, but delete
									// after 5 secs.
									$rootScope.alertCounter = $rootScope.alertCounter + 1;
									var alertMessage = {
										index : $rootScope.alertCounter,
										code : code,
										message : message
									};
									var promiseInfo = $interval(
											new function() {
												$log
														.log('Info - added new message #'
																+ alertMessage.index
																+ ' '
																+ new Date());
												$rootScope.alerts
														.push(alertMessage);
												$log
														.log('Total Infos: '
																+ $rootScope.alerts.length);
												// scroll to the top of window
												$timeout(
														function() {
															if (document
																	&& document.body
																	&& document.documentElement) {
																document.body.scrollTop = document.documentElement.scrollTop = 0;
															}
														}, 200);
											},
											messageCodesConstant.INFO_MESSAGE_RETAIN_INTERVAL,
											1);
									// store this promise in the
									// error object
									// too
									alertMessage.promise = promiseInfo;

									promiseInfo
											.then(function() {
												$log
														.log('Info - interval elapsed; removing #'
																+ alertMessage.index
																+ ' '
																+ new Date());
												self
														.clearInfo(alertMessage.index);
												$log
														.log('Total Infos: '
																+ $rootScope.alerts.length);
											});

								};

								/**
								 * Clear the error messages
								 */
								this.clearError = function() {
									// cancel all the pending promises
									// $log.log('Clearing all errors: '
									// + $rootScope.errors.length);
									var clearAllErrorFunctionVar = function(
											element, index, array) {
										if (element && element.promise) {
											$log
													.log('Ready to cancel promise #'
															+ element.index
															+ ' located at index: '
															+ index);
											$log
													.log('Return status: '
															+ $interval
																	.cancel(element.promise));
											element.promise = undefined;
										}
										return true;
									};

									$rootScope.errors
											.every(clearAllErrorFunctionVar);
									$rootScope.errors = [];
									// $log.log('Total Errors: '
									// + $rootScope.errors.length);
								};

								/**
								 * Clear the alert messages
								 */
								this.clearInfo = function() {
									// cancel all the pending promises
									// $log.log('Clearing all alerts: '
									// + $rootScope.alerts.length);
									var clearAllAlertFunctionVar = function(
											element, index, array) {
										if (element && element.promise) {
											$log
													.log('Ready to cancel promise #'
															+ element.index
															+ ' located at index: '
															+ index);
											$log
													.log('Return status: '
															+ $interval
																	.cancel(element.promise));
											element.promise = undefined;
										}
										return true;
									};

									$rootScope.alerts
											.every(clearAllAlertFunctionVar);
									$rootScope.alerts = [];
									// $log.log('Total Infos: '
									// + $rootScope.alerts.length);
								}

								/**
								 * Clear all messages
								 */
								this.clearAll = function() {
									this.clearError();
									this.clearInfo();
								}

								/**
								 * Remove the specified info message
								 */
								this.removeInfo = function(alertIndex) {
									// cancel the pending promise, and remove
									// from the array
									$log.log('Trying to remove alert index: '
											+ alertIndex);
									var removeInfoFunctionVar = function(
											element, index, array) {
										if (element
												& alertIndex === element.index) {
											if (element.promise) {
												$log
														.log('Ready to cancel promise located at index: '
																+ index);
												$log
														.log('Return status: '
																+ $interval
																		.cancel(element.promise));
												element.promise = undefined;
											}
											$rootScope.alerts.splice(index, 1);
											return false;
										}
										return true;
									};

									$rootScope.alerts
											.every(removeInfoFunctionVar);
								}

								/**
								 * Remove the specified error message
								 */
								this.removeError = function(errorIndex) {
									// cancel the pending promise, and remove
									// from the array
									$log.log('Trying to remove error index: '
											+ errorIndex);
									var removeErrorFunctionVar = function(
											element, index, array) {
										if (element
												&& errorIndex === element.index) {
											if (element.promise) {
												$log
														.log('Ready to cancel promise located at index: '
																+ index);
												$log
														.log('Return status: '
																+ $interval
																		.cancel(element.promise));
												element.promise = undefined;
											}
											$rootScope.errors.splice(index, 1);
											return false;
										}
										return true;
									};

									$rootScope.errors
											.every(removeErrorFunctionVar);
								}
							} ]);
})();
