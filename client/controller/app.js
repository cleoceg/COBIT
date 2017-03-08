var app = angular.module('cOBIT', ['ngRoute', 'ngSanitize', 'cobitRef', 'cobitProc']);

var ctrGen = function($scope, $http, url) {
	alert("ctrGen: "+url);
	$http.get(url).
		then(function(response){
			$scope.data = response.data
		});
}

app.config (['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$routeProvider
			.when('/', {
				templateUrl: 'home/home.html',
				controller: 'homeController',
			})
			.when('/about', {
				templateUrl: '/about.html'
			})
			.when('/underc', {
				templateUrl: '/underc.html'
			})
			.when('/overview', {
				templateUrl: '/intro/overview.html',
				controller: 'CtrlOvw'
			})
			.when('/PO', {
				templateUrl: '/proc/PO.html'
			})
			.when('/AI', {
				templateUrl: '/proc/AI.html'
			})
			.when('/DS', {
				templateUrl: '/proc/DS.html'
			})
			.when('/ME', {
				templateUrl: '/proc/ME.html'
			})
			.otherwise({redirectTo: '/'});
}]);

	
app.controller('homeController', ['$scope', function ($scope) {
		//alert("I'm in homectrl");
		$scope.msg='homectrl';
}]);

app.directive('footerGeneric', function() {
	return {
		restrict: 'EA',
		templateUrl: '/directives/footer.html'
	};
});

app.directive('navigation', function() {
	return {
		restrict: 'EA',
		templateUrl: '/directives/navigation.html'
	};
});

app.controller('CtrlOvw', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/overview');
}]);