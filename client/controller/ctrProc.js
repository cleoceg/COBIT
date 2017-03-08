var app = angular.module('cobitProc', ['ngRoute', 'ngSanitize']);

var ctrGen = function($scope, $http, url) {
        $scope.data = '';
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
                        .when('/proc/:id', {
				templateUrl: '/proc/processus.html',
				controller: 'ctrRefProcs'
			})
                                
			.otherwise({redirectTo: '/'});
}]);

app.controller('ctrRefProcs', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
                //alert('$routeParams: '+$routeParams.id);
		ctrGen($scope, $http, '/api/'+$routeParams.id);
}]);
