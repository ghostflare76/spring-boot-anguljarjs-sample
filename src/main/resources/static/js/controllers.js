'use strict';

/* Controllers */

angular.module('aionChat.controllers', [])
	.controller('ChatController', ['$scope', 'myService',  function($scope, myService) {
	  
	$scope.name = 'Hello World';
	$scope.getName = function() {
		alert($scope.name);
	}
	
	$scope.info = {
			name: '홍길동',
			address: '서울시 강남구 수서동'
	};
	
	console.log(myService.get());
}]);