/**
 * EDMSSessionListener.java
 */
package com.findmutuals.util;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * This class is used to handle the events about HttpSession lifecycle changes.
 * 
 * @author Tarun Verma
 * 
 */
public class FindMutualsSessionListener implements HttpSessionListener {

	private static final Logger logger = LoggerFactory.getLogger(FindMutualsSessionListener.class);

	/**
	 * Constructor
	 */
	public FindMutualsSessionListener() {
	}

	/**
	 * Method is invoked when HttpSession object is created.
	 * 
	 * @see javax.servlet.http.HttpSessionListener#sessionCreated(javax.servlet.http.HttpSessionEvent)
	 */
	@Override
	public void sessionCreated(HttpSessionEvent httpSessionEvent) {
		// log the message
		String msg = new StringBuilder("Session ID: ").append(httpSessionEvent.getSession().getId())
				.append(" Created()").toString();
		logger.info(msg);
		httpSessionEvent.getSession().getServletContext().log(msg);
	}

	/**
	 * Method is invoked when HttpSession object is destroyed.
	 * 
	 * @see javax.servlet.http.HttpSessionListener#sessionDestroyed(javax.servlet.http.HttpSessionEvent)
	 */
	@Override
	public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
		try {
			HttpSession httpSession = httpSessionEvent.getSession();
			// log the message
			String msg = new StringBuilder("Session ID: ").append(httpSession.getId()).append(" Destroyed()")
					.toString();
			logger.info(msg);
			httpSessionEvent.getSession().getServletContext().log(msg);

			// end the server side session as well
//			String userId = (String) httpSession.getAttribute(IEDMSConstants.USER_ID_SESSION_ATTRIBUTE);
//			if (userId != null) {
//				// Enumeration<String> attributes = httpSession
//				// .getAttributeNames();
//				// while (attributes.hasMoreElements()) {
//				// String attribute = attributes.nextElement();
//				// logger.debug(attribute + ":"
//				// + httpSession.getAttribute(attribute));
//				// }
//				logger.info("Logging out DFC Adapter for userid {} in session {}", userId, httpSession.getId());
//				IDfcAdapter dfcAdapter = (IDfcAdapter) httpSession
//						.getAttribute(IEDMSConstants.SCOPED_TARGET_DFC_ADAPTER_SESSION_ATTRIBUTE);
			//	dfcAdapter.logout(userId);
//			} else {
//				logger.info("User ID is not present in HttpSession [ID: {}], skipping log out from server side.",
//						httpSession.getId());
//			}

		} catch (IllegalStateException illegalstateexception) {
		}
	}
}
