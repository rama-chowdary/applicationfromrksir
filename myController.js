'user strict';


angular.module('myApp').controller('YourCtrl',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
	$scope.name='ramakrishna';
	//alert('123');
	$scope.loginfun=function(){
		$scope.user=angular.copy($scope.userName);
		$scope.pasd=angular.copy($scope.password);
		if($scope.user==='kk'&& $scope.pasd==='kk'){
			sessionStorage.setItem('userName', $scope.user);
			$state.transitionTo ('dashboard.page1')
		}
		else if($scope.user==='2' && $scope.pasd==='2'){
			$state.go('dashboard.page4');
		}
		else if($scope.user==='3'&& $scope.pasd==='3'){
		$state.go('dashboard.page3');	
		}
		else{
		alert("try again")
		}
		
	}
}]);