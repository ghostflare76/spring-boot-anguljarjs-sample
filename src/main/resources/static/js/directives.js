/* Directives */

angular.module('aionChat.directives', [])

	.directive('userInfo', function () {
	    return {
	    	restrict : 'A',
	        template: '이름: {{info.name}}, 주소 : {{info.address}}'	       
	    };
    })
	
	.directive('memoInfo', function() {
		return {
			restrict : 'E',
			link: function(scope, element, attrs) {
				element.html("안녕하세요");
			}
		};
	});
