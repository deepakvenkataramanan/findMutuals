/**
 * 
 */
package com.findmutuals.controller;

import java.util.concurrent.Callable;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * This is the controller to launch the AngularJS application. It will redirect
 * to /resource/index.html page.
 * 
 * @author Deepak 
 *
 */
@Controller
public class LaunchController {
	private static final Logger logger = LoggerFactory
			.getLogger(LaunchController.class);

	/**
	 * Launch the application by redirecting to index.html page.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Callable<ModelAndView> launch(final ModelAndView model) {

		return new Callable<ModelAndView>() {
			@Override
			public ModelAndView call() throws Exception {
				model.setViewName("redirect:/resources/index.html");
				return model;
			}
		};
	}

}
