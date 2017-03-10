/**
 * 
 */
package com.findmutuals.controller.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



/**
 * REST API controller for Login functionality.
 * 
 * @author Deepak Venkataramanan
 *
 */
@RestController
@RequestMapping("/user")
public class UserRestController  {

	private static final Logger logger = LoggerFactory.getLogger(UserRestController.class);


	/**
	 * Authenticate the user, and return the security profile along with it.
	 * 
	 * Method = POST
	 * 
	 * @param inUser
	 * @return User
	 */
//	@RequestMapping(value = "/login", method = RequestMethod.POST)
//	public Callable<User> authenticate(@RequestBody User inUser, HttpServletRequest request) {
//
//		return new Callable<User>() {
//			@Override
//			public User call() throws Exception {
//				// set the user id in MDC for logging purpose
//				MDC.put(MDC_USER_ID, inUser.getId());
//				logger.info("Authenticating using REST service: UserID: {}", inUser.getId());
//
//				// build the authentication and validate against back end
//				Authentication authentication = new UsernamePasswordAuthenticationToken(inUser.getId(),
//						inUser.getPassword(), AuthorityUtils.createAuthorityList(ROLE_USER));
//
//				if (userService.authenticate(authentication)) {
//					logger.info("sessionId:" + request.getSession().getId());
//
//					logger.info("Successful authentication for UserID: {}", inUser.getId());
//					HttpSession session = request.getSession(false);
//					if (session != null) {
//						session.setAttribute(IEDMSConstants.USER_ID_SESSION_ATTRIBUTE, inUser.getId());
//						logger.info("Stored userid {} in session {}", inUser.getId(), session.getId());
//					}
//
//					return inUser;
//				}
//
//				return null;
//
//			}
//		};
//	}
//
//	/**
//	 * Logout the user.
//	 * 
//	 * Method = GET
//	 * 
//	 */
//	@RequestMapping(value = "/{userId}/logout", method = RequestMethod.GET)
//	public Callable<Void> logout(@PathVariable ("userId")  String userId, HttpServletRequest request) {
//
//		return new Callable<Void>() {
//			@Override
//			public Void call() throws Exception {
//				// set the user id in MDC for logging purpose
//				MDC.put(MDC_USER_ID, userId);
//				logger.info("Logging out using REST service: UserID: {}", userId);
//
//				// invalidate the session associated with the user
//				HttpSession session = request.getSession(false);
//				String sessionId = EMPTY_STRING;
//				if (session != null) {
//					sessionId = session.getId();
//					try {
//						session.invalidate();
//						logger.info("Invalidated session {} for user {}", sessionId, userId);
//					} catch (IllegalStateException ex) {
//						logger.warn("Already invalidated session {} for user {}. Ignoring...", sessionId, userId);
//					}
//				}
//				logger.info("Successfully Logged out using REST service: UserID: {}", userId);
//				return null;
//			}
//		};
//	}
//
//	@RequestMapping(value = "/doctypes", method = RequestMethod.GET)
//	public Callable<List<DocType>> getDocTypeList(HttpServletRequest request) {
//
//		return new Callable<List<DocType>>() {
//			@Override
//			public List<DocType> call() throws Exception {
//
//				logger.info(":::Getting DocTypeList:::");
//				
//				List<DocType> docTypeList = userDataService.getDocTypes();
//				logger.info("");
//				
//
//				return docTypeList;
//
//			}
//		};
//	}

	/**
	 * Sample test method to check GET call.
	 * 
	 * http://localhost:8080/edms/user/greeting?name=Tarun
	 * 
	 * Method = GET
	 * 
	 * @param name
	 * @return User
	 */
	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String greeting() {
		
		return "Hello world";
	}
}
