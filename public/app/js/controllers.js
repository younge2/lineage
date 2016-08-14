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

ctrl.controller('About', ['$scope', '$state', function($scope, $state) {

}]);

ctrl.controller('Contact', ['$scope', '$state', function($scope, $state) {
    $scope.MessageIn = "Message";
    $scope.InputName = "";
    $scope.InputEmail = "";
    $scope.InputPhone = "";
    $scope.InputMessage = "Message";

    $scope.sendMail=function() {
         $scope.data = ({
            InputName : $scope.InputName,
            InputPhone : $scope.InputPhone,
            InputEmail : $scope.InputEmail,
            InputMessage : $scope.InputMessage
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

ctrl.controller('Landing', ['$scope', '$state', function($scope, $state) {
    $scope.MessageIn = "Message";
    $scope.InputName = "";
    $scope.InputEmail = "";
    $scope.InputPhone = "";
    $scope.InputMessage = "Message";

    $scope.sendMail=function() {
         $scope.data = ({
            InputName : $scope.InputName,
            InputPhone : $scope.InputPhone,
            InputEmail : $scope.InputEmail,
            InputMessage : $scope.InputMessage
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


ctrl.controller('NavCtrl', ['$scope', '$state', function($scope, $state) {

}]);
