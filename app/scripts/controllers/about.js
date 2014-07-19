'use strict';

/**
 * @ngdoc function
 * @name microCarrosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the microCarrosApp
 */
angular.module('microCarrosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
