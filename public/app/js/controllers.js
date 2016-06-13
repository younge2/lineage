var ctrl = angular.module('treeCtrl', []);

ctrl.controller('Home', ['$scope', '$http', function($scope, $http) {


	$scope.sendMail=function() {
		 $scope.data = ({
            });

		$http.post('/contact-form', $scope.data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
 					console.log("success");
 					console.log($scope.data);
                    
 
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("error");
                });
	}

}]);
