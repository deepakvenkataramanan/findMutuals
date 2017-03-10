(function() {
	'use strict';

	var loginService = angular.module('com.doc.ui.login.services', []);

	loginService
			.service(
					'com.doc.ui.loginService',
					[
							'$log',
							'commonUtilService',
							'$resource',
							'$q',
							'$http',
							function($log, commonUtilService, $resource, $q,
									$http) {

								this.authenticate = function(inUserName,
										inUserPassword) {

									$log
											.log('AuthenticationService initialized.');

									var deferred = $q.defer();
									// invoke the REST service to
									// get the user details
									var user = $resource(commonUtilService
											.getWebContext()
											+ '/v1.0/user/login', null, {
										authenticate : {
											method : "POST"
										}
									});

									// POST with userid and password
									// to authenticate
									user
											.authenticate(
													{
														id : inUserName,
														password : btoa(inUserPassword)

													},
													// successful execution -
													// resolve the promise
													function(userProfile) {
														$log
																.log('Received user profile back from service: '
																		+ userProfile);
														// delete
														// $http.defaults.headers.common.Authorization;

														deferred
																.resolve(userProfile);
													},
													// on getting error - reject
													// the promise
													function(errorMessage) {
														$log
																.error('In login service - Received error from REST service: '
																		+ angular
																				.toJson(errorMessage));
														commonUtilService
																.handleErrorMessage(
																		deferred,
																		errorMessage,
																		'Error during login.');
													});
									// return the promise back to caller
									return deferred.promise;

								};

								/**
								 * Logout the user.
								 */
								this.logout = function(inUserName) {
									$log.log('Logging out in service: '
											+ inUserName);
									// invoke the REST service to
									// get the user details
									var user = $resource(commonUtilService
											.getWebContext()
											+ '/v1.0/user/:userId/logout');

									// Get with userid
									// to logout
									user.get({
										userId : inUserName
									});
								};

							} ]);
})();
