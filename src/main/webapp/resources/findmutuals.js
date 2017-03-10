var findMutuals = angular.module('findMutuals', ['ui.router','ui.bootstrap','login.controller','com.findmutuals.welcome.controller','com.findmutuals.register.controller','com.findmutuals.header.directives','com.findmutuals.footer.directives','com.findmutuals.search.controller']);

findMutuals.config([		
		'$stateProvider',		
		function( $stateProvider
				) {

			// $urlRouterProvider.otherwise('/about');

			// use HTML5 mode by default.
			// $locationProvider.html5Mode(true);

			$stateProvider

			.state('welcome', {
				url : '/welcome',
				templateUrl : 'welcome/welcome.html'
			})
			
			.state('search', {
				url : '/search',
				templateUrl : 'search/search.html'
			})

			.state('login', {
			
				templateUrl : 'login/login.html'
			})
			
			.state('register', {
			
				templateUrl : 'register/register.html'
			})
			
			.state('interests', {
			
				templateUrl : 'register/user-interests.html'
			})


			.state('home', {
				
				templateUrl : 'main/mainPage.html'
			});
			


		} ]);

findMutuals.run([ '$rootScope', '$log', '$state',

function($rootScope, $log, $state) {

	$state.go('welcome');

} ]);
