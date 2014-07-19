'use strict';

/**
 * @ngdoc function
 * @name microCarrosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the microCarrosApp
 */
angular.module('microCarrosApp')
  .controller('MainCtrl', function ($scope) {
    $scope.mensaje = "A lo que rene dijo que sea";
    $scope.cambiar = function(){
    	$scope.mensaje = $scope.mensaje2;
    }
  });
