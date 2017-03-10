(function() {
	'use strict';

	/* App Constants for messages */
	var messageConstants = angular.module(
			'com.doc.ui.components.message.constants', []);

	// define all the common constants
	messageConstants
			.constant(
					'messageCodesConstant',
					{
						INFO_MESSAGE_RETAIN_INTERVAL : 2000,
						ERROR_MESSAGE_RETAIN_INTERVAL : 3000,
						LOGIN_SUCCESS : 'Login_100',
						LOGIN_FAILURE : 'Login_200',
						SEARCH_SUCCESS : 'Search_100',
						SEARCH_FAILURE : 'Search_200',
						UNKNOWN_DOCUMENT_TYPE : 'Unknown_Document_Type_200',
						CLINICAL_VIEW_DOCUMENT_FAILURE : 'Clinical_View_Document_200',
						CLINICAL_VIEW_DOCUMENT_VERSIONS_FAILURE : 'Clinical_View_Document_Versions_200',
						CLINICAL_VIEW_DOCUMENT_CONTENT_FAILURE : 'Clinical_View_Document_Content_200',
						CLINICAL_DELETE_DOCUMENT_SUCCESS : 'Clinical_Delete_Document_100',
						CLINICAL_DELETE_DOCUMENT_FAILURE : 'Clinical_Delete_Document_200',
						CLINICAL_DELETE_VERSION_SUCCESS : 'Clinical_Delete_Version_100',
						CLINICAL_DELETE_VERSION_FAILURE : 'Clinical_Delete_Version_200',
						CLINICAL_UPDATE_SUCCESS : 'Clinical_Update_100',
						CLINICAL_UPDATE_FAILURE : 'Clinical_Update_200',
						CLINICAL_UPDATE_FILE_EXT_FAILURE : 'Clinical_Update_File_Ext_300',
						EMR_VIEW_DOCUMENT_FAILURE : 'EMR_View_Document_200',
						EMR_DELETE_DOCUMENT_SUCCESS : 'EMR_Delete_Document_100',
						EMR_DELETE_DOCUMENT_FAILURE : 'EMR_Delete_Document_200',
						EMR_UPDATE_SUCCESS : 'EMR_Update_100',
						EMR_UPDATE_FAILURE : 'EMR_Update_200',
						FOLIO_DELETE_DOCUMENT_SUCCESS : 'Folio_Delete_Document_100',
						FOLIO_DELETE_DOCUMENT_FAILURE : 'Folio_Delete_Document_200',
						FOLIO_UPDATE_SUCCESS : 'Folio_Update_100',
						FOLIO_UPDATE_FAILURE : 'Folio_Update_200',
						FOLIO_VIEW_SUCCESS : 'Folio_View_100',
						FOLIO_VIEW_FAILURE : 'Folio_View_200',
						NO_DELETE_ACCESS : 'NO_DELETE_ACCESS',
						NO_VERSION_ACCESS : 'NO_VERSION_ACCESS',
						UNAUTHORIZED_STATUS : 'Unauthorized'
					});
})();
