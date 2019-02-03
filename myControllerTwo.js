'user strict';


angular.module('myApp').controller('YourCtrlTwo',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
	$scope.name='ramakrishna';
	$scope.username=sessionStorage.getItem("userName");
	alert('123');
	$scope.loginfun=function(){
	
		
	}
	$( document ).ready(function() {
 $( "a" ).greenify();
});
	
}]);