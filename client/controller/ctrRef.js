var app = angular.module('cobitRef', ['ngRoute', 'ngSanitize']);

var ctrGen = function($scope, $http, url) {
	//alert("ctrGen: "+url);
	$http.get(url).
		then(function(response){
			$scope.data = response.data
		});
}

app.config (['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$routeProvider
			.when('/governance', {
				templateUrl: '/reference/governance.html',
				controller: 'ctrRefGov'
			})
			.when('/resources', {
				templateUrl: '/reference/resources.html',
				controller: 'ctrRefRsc'
			})
			.when('/criteria', {
				templateUrl: '/reference/criteria.html',
				controller: 'ctrRefCrit'
			})
			.when('/gcmmi', {
				templateUrl: '/reference/gcmmi.html',
				controller: 'ctrRefGcmmi'
			})
			
			.otherwise({redirectTo: '/'});
}]);

app.controller('ctrRefGov', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/governance');
}]);

app.controller('ctrRefRsc', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/resources');
}]);

app.controller('ctrRefCrit', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/criteria');
}]);

app.controller('ctrRefGcmmi', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/gcmmi');
}]);
