(function() {
	'use strict';

	var welcomeControllers = angular.module(
			'com.findmutuals.welcome.controller', []);

	welcomeControllers.controller('welcomeController', [
			'$scope',
			'$window',

			function($scope, $window) {
				
				
				  $scope.mytime = new Date();

				  $scope.hstep = 1;
				  $scope.mstep = 15;

				  $scope.options = {
				    hstep: [1, 2, 3],
				    mstep: [1, 5, 10, 15, 25, 30]
				  };

				  $scope.ismeridian = true;
				  $scope.toggleMode = function() {
				    $scope.ismeridian = ! $scope.ismeridian;
				  };

				  $scope.update = function() {
				    var d = new Date();
				    d.setHours( 14 );
				    d.setMinutes( 0 );
				    $scope.mytime = d;
				  };

				  $scope.changed = function () {
				    $log.log('Time changed to: ' + $scope.mytime);
				  };

				  $scope.clear = function() {
				    $scope.mytime = null;
				  };
				
				$scope.isNavCollapsed = true;
				  $scope.isCollapsed = false;
				  $scope.isCollapsedHorizontal = false;

				$scope.tabs = [ {
					title : 'Pets',
					content : 'Dynamic content 1'
				}, {
					title : 'Ride',
					content : 'Dynamic content 2'
				} ];

				$scope.alertMe = function() {
					setTimeout(function() {
						$window.alert('You\'ve selected the alert tab!');
					});
				};

				$scope.model = {
					name : 'Tabs'
				};

				$scope.items = [ 'Dog', 'cat'

				];
				
				var _selected;

				  $scope.selected = undefined;

				$scope.states = [ '55311', '23144', '55344', '76522',
						'98776', 'Colorado', 'Connecticut', 'Delaware',
						'87522', '85231', 'Hawaii', 'Idaho', 'Illinois',
						'Indiana', 'Iowa', '98522', 'Kentucky', 'Louisiana',
						'Maine', '33221', '55443', '11223',
						'Minnesota', 'Mississippi', '01667', 'Montana',
						'Nebraska', 'Nevada', '89887', 'New Jersey',
						'New Mexico', 'New York', 'North Dakota',
						'North Carolina', 'Ohio', '76544', 'Oregon',
						'Pennsylvania', 'Rhode Island', 'South Carolina',
						'South Dakota', 'Tennessee', 'Texas', 'Utah',
						'Vermont', 'Virginia', 'Washington', 'West Virginia',
						'Wisconsin', 'Wyoming' ];
				
				  $scope.dtFrom = function() {
					    $scope.popup1.opened = true;
					  };

					  $scope.dtTo = function() {
						    $scope.popup1.opened = true;
						  };
						  
						  $scope.inlineOptions = {
								    customClass: getDayClass,
								    minDate: new Date(),
								    showWeeks: true
								  };

								  $scope.dateOptions = {
								    dateDisabled: disabled,
								    formatYear: 'yy',
								    maxDate: new Date(2020, 5, 22),
								    minDate: new Date(),
								    startingDay: 1
								  };

								  // Disable weekend selection
								  function disabled(data) {
								    var date = data.date,
								      mode = data.mode;
								    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
								  }
								  
								  var tomorrow = new Date();
								  tomorrow.setDate(tomorrow.getDate() + 1);
								  var afterTomorrow = new Date();
								  afterTomorrow.setDate(tomorrow.getDate() + 1);
								  $scope.events = [
								    {
								      date: tomorrow,
								      status: 'full'
								    },
								    {
								      date: afterTomorrow,
								      status: 'partially'
								    }
								  ];

								  function getDayClass(data) {
								    var date = data.date,
								      mode = data.mode;
								    if (mode === 'day') {
								      var dayToCheck = new Date(date).setHours(0,0,0,0);

								      for (var i = 0; i < $scope.events.length; i++) {
								        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

								        if (dayToCheck === currentDay) {
								          return $scope.events[i].status;
								        }
								      }
								    }

								    return '';
								  }
								  
								  $scope.popup1 = {
										    opened: false
										  };

										  $scope.popup2 = {
										    opened: false
										  };
										  
										  
										  
										  $scope.rate = 7;
										  $scope.max = 10;
										  $scope.isReadonly = false;

										  $scope.hoveringOver = function(value) {
										    $scope.overStar = value;
										    $scope.percent = 100 * (value / $scope.max);
										  };

										  $scope.ratingStates = [
										    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
										    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
										    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
										    {stateOn: 'glyphicon-heart'},
										    {stateOff: 'glyphicon-off'}
										  ];

			

			} ]);
	


})();
