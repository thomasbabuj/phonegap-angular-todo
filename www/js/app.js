
// Create a new AngularJS module and tell Angular to initialize initialize
angular.module('todo', ['ionic'])
	   .controller('TodoCtrl', function($scope){
	   		$scope.tasks = [
	   			{title : 'Collect coins'},
	   			{title : 'Eat mushrooms'},
	   			{title : 'Get high enough to grab the flag'},
	   			{title : 'Find the Princess'}
	   		];
	   });