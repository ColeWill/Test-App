angular.module('LeafApp',[])
	.controller('LeafController', LeafController);


LeafController.$inject = ['$http','$scope'];
function LeafController($http,$scope){
	console.log('leaf Controller working');
	
	var self = this;
	
	self.getCatalog = getCatalog;
	self.getInfo = getInfo;

	function getCatalog(){
		console.log('Retreiving data');
		$http
			.get('/api/catalog')
			.then(function(res){
				$scope.products = res.data;
				console.log("Heres the Catalog...");
				console.log('$scope.products ' + $scope.products);
		});
	}

	function getInfo(){
		console.log("getting info!");
		$http
			.get('/api/info')
			.then(function(res){
				$scope.info = res.data;
				console.log('Received the Info');

		});
	}

}