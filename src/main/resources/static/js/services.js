'use strict';

/* Services */

angular.module('aionChat.services', [])
	.factory('myService', ['$rootScope', function($rootScope) {
			
			var oData = { name: '홍길동', address : '서울시 강남구 수서동'};
			var service = {
					
				set: function(val) {
					oData = val;
				},
				get: function() {
					return oData;
				}
			}
			
			return service;
		
}]);