(function() {
	'use strict';

	/**
	 * Common utility services
	 */
	var commonUtilServices = angular.module(			 
			'com.doc.ui.components.common.services', []);

	/**
	 * This service would be used to show alert or error messages on top of the
	 * screen
	 */
	commonUtilServices
			.service(
					'commonUtilService',
					[
							'$window',
							'$log',
							'messageCodesConstant',
							function($window, $log, messageCodesConstant) {
								// get the application's base URL
								// and web context
								var pathName = $window.location.pathname;
								$log.log('Window location path: ' + pathName);
								var appWebContext = pathName.substring(0,
										pathName.indexOf('/', 2));
								$log.log('Application Web Context: '
										+ appWebContext);
								var baseURL = $window.location.origin;
								$log.log('Base URL: ' + baseURL);

								/**
								 * Convert Date to MM/dd/YYYY format
								 */
								this.dateToMDY = function(date) {
									if (date && angular.isDate(date)) {
										var d = date.getDate();
										var m = date.getMonth() + 1;
										var y = date.getFullYear();
										return '' + (m <= 9 ? '0' + m : m)
												+ '/' + (d <= 9 ? '0' + d : d)
												+ '/' + y;
									} else {
										return '';
									}
								};
								
								/**
								 * Convert Date to YYYY-MM-dd format
								 */
								
								this.dateToMDYDash = function(date) {
									if (date && angular.isDate(date)) {
										var d = date.getDate();
										var m = date.getMonth() + 1;
										var y = date.getFullYear();
										return '' + y + '-' + (m <= 9 ? '0' + m : m)
												+ '-' + (d <= 9 ? '0' + d : d)+'T';
									} else {
										return '';
									}
								};

								/**
								 * Convert Date to ISO format e.g.
								 * YYYY-MM-DDTHH:mm:ss.sssZ
								 */
								this.dateToISO = function(date) {
									if (date && angular.isDate(date)) {
										return date.toISOString();
									} else {
										return '';
									}
								};

								/**
								 * Convert Date with milliseconds format to
								 * MM/dd/YYYY format
								 */
								this.dateUTCToMDY = function(inDateVal) {
									return (inDateVal && inDateVal != null) ? this.dateToMDY(new Date(
											inDateVal))
											: '';
								};

								/**
								 * Return the base URL with protocol, host and
								 * port values, e.g. https://localhost:8080
								 */
								this.getBaseURL = function() {
									return baseURL;
								};

								/**
								 * Return the web context
								 */
								this.getWebContext = function() {
									return appWebContext;
								};

								/**
								 * Handle the error message using the passed
								 * deferred object. Use only for $resource
								 * calls.
								 */
								this.handleErrorMessage = function(deferred,
										errorMessage, defaultMessage) {
									if (errorMessage && errorMessage.status
											&& errorMessage.statusText
											&& errorMessage.data
											&& errorMessage.data.message
											&& errorMessage.data.requestURI) {
										$log
												.error('Received error from REST API: '
														+ errorMessage.status
														+ ' - '
														+ errorMessage.statusText
														+ '; Message: '
														+ errorMessage.data.message
														+ '; Request URI: '
														+ errorMessage.data.requestURI);
										// for unauthorized errors, no need to
										// display whole trace
										// just display message only
										if (errorMessage.statusText
												.indexOf(messageCodesConstant.UNAUTHORIZED_STATUS) != -1) {
											deferred
													.reject(errorMessage.data.message);
										} else {
											deferred
													.reject(errorMessage.status
															+ ' - '
															+ errorMessage.statusText
															+ '; Message: '
															+ errorMessage.data.message
															+ '; Request URI: '
															+ errorMessage.data.requestURI);
										}
									} else {
										deferred.reject(defaultMessage);
									}
								};

								/**
								 * Handle the error message using the passed
								 * deferred object. Use only for $http calls as
								 * object structure is different.
								 */
								this.handleHttpErrorMessage = function(
										deferred, errorMessage, defaultMessage) {
									if (errorMessage && errorMessage.status
											&& errorMessage.message
											&& errorMessage.requestURI) {
										$log
												.error('Received error from REST API: '
														+ errorMessage.status
														+ '; Message: '
														+ errorMessage.message
														+ '; Request URI: '
														+ errorMessage.requestURI);
										// for unauthorized errors, no need to
										// display whole trace
										// just display message only
										if (errorMessage.status
												.indexOf(messageCodesConstant.UNAUTHORIZED_STATUS) != -1) {
											deferred
													.reject(errorMessage.message);
										} else {
											deferred.reject(errorMessage.status
													+ '; Message: '
													+ errorMessage.message
													+ '; Request URI: '
													+ errorMessage.requestURI);
										}
									} else {
										deferred.reject(defaultMessage);
									}
								};

							} ]);
})();
