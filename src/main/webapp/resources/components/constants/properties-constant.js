(function() {
	'use strict';

	/* App Constants common for all modules */
	var propertiesConstants = angular.module(
			'com.documentum.ui.components.constants.properties', []);

	// define all the common constants
	propertiesConstants
			.constant(
					'propertiesConstant',
					{
						USER : 'ecaa_ui_user',
						AUTH_TOKEN : 'authToken',
						MAX_SEARCH_RESULTS_TAB : 5,
						MAX_RECORDS_SEARCH_COUNT : 5,
						DELETE_DOCUMENT_CONFIRMATION_TITLE : 'Confirmation',
						DELETE_DOCUMENT_CONFIRMATION_MESSAGE : 'Do you really want to delete this document with all its versions?',
						DELETE_VERSION_CONFIRMATION_TITLE : 'Confirmation',
						DELETE_VERSION_CONFIRMATION_MESSAGE : 'Do you really want to delete this version of the document?',
						VALID_FILE_EXTENSIONS_FOR_UPLOAD : [ 'pdf', 'csv',
								'zip', 'wav', 'zipx', 'mov', 'avi', 'mp3',
								'mp4', 'swf', 'wma', 'ismv', 'ism', 'msg',
								'xls', 'xlsx', 'xlsm', 'rtf', 'ppt', 'pptx',
								'doc', 'docx', 'docm', 'xml', 'tif', 'txt',
								'jpg', 'mht', 'mdi', 'gif', 'bmp', 'png',
								'xps', 'odt', 'prn', 'log', 'xps', 'odt',
								'mdi', 'prn', 'ismv', 'ism' ],
						DF_PERMIT_READ : 3,
						DF_PERMIT_WRITE : 6,
						DF_PERMIT_DELETE : 7,
						TIME_ZONE_CST : 'America/Chicago',
						DATE_FILTER_FORMAT : 'MM/DD/YYYY',
						DATE_FORMAT : 'MM/DD/YYYY'
					});
})();
