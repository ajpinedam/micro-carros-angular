'use strict';

/**
 * @ngdoc function
 * @name microCarrosApp.controller:VerCtrl
 * @description
 * # VerCtrl
 * Controller of the microCarrosApp
 */
angular.module('microCarrosApp')
  .controller('VerCtrl', function ($scope, $routeParams, vehiculosapi) {
  		
  		$scope.carro = [];

  		vehiculosapi.get($routeParams.id).then(function (result){
  			$scope.carro = result.result;

  			console.log(result.result);
  		});
  });
