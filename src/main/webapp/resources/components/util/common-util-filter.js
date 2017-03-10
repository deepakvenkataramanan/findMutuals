(function() {
	'use strict';

	/**
	 * Common utility filters
	 */
	var commonUtilFilters = angular.module(
			'com.edms.ui.components.common.filters', []);

	/**
	 * This filter would be used to date values in CST time zone format
	 */
	commonUtilFilters.filter('convertDateToCST', [
			'$log',
			'propertiesConstant',
			function($log, propertiesConstant) {
				return function(input, dateFormat) {
					var out = '';
					if (input && input !== null && dateFormat
							&& dateFormat != null
							&& angular.isString(dateFormat)) {
						// $log.log('Input: ' + input);
						// $log.log('Format: ' + dateFormat);
						var dateValue = angular.isDate(input) ? input
								: new Date(input);
						// $log.log('Converting value: ' + dateValue);
						out = moment(dateValue).tz(
								propertiesConstant.TIME_ZONE_CST).format(
								dateFormat);
						// $log.log('Output: ' + out);
					}
					return out;
				};

			} ]);
})();
