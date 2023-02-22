var app = angular.module('loginApp',[]).controller('homeCtrl',['$scope',function($scope){
	
	$scope.showPassword=false;
	$scope.textShow="MOSTRAR";

	$scope.buttonTouchStart = function() {
		$scope.textShow="OCULTAR";
	    $scope.showPassword = true;
	}

	$scope.buttonTouchEnd = function() {
		$scope.textShow="MOSTRAR";
	    $scope.showPassword = false;
	}

}]);


app.directive('bpTouchstart', [function() {
                return function(scope, element, attr) {

                    element.on('touchstart', function(event) {
                        scope.$apply(function() { 
                            scope.$eval(attr.bpTouchstart); 
                        });
                    });
                };
            }]).directive('bpTouchend', [function() {
                return function(scope, element, attr) {

                    element.on('touchend', function(event) {
                        scope.$apply(function() { 
                            scope.$eval(attr.bpTouchend); 
                        });
                    });
                };
            }]);