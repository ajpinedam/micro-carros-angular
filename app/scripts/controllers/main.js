'use strict';

/**
 * @ngdoc function
 * @name microCarrosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the microCarrosApp
 */
angular.module('microCarrosApp')
  .controller('MainCtrl', function ($scope, vehiculosapi) {

  /*  $scope.mensaje = "A lo que rene dijo que sea";
    $scope.cambiar = function(){
    	$scope.mensaje = $scope.mensaje2;
    }
  */
  	$scope.vehicules = [];
	
	vehiculosapi.list().then(function(result){
		$scope.vehicules = result.result;
	});

	console.log(vehiculosapi);

  });
