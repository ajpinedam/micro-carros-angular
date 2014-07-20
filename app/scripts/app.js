'use strict';

/**
 * @ngdoc overview
 * @name microCarrosApp
 * @description
 * # microCarrosApp
 *
 * Main module of the application.
 */
angular
  .module('microCarrosApp', [
    'ngResource',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl'
      })
      .when('/ver/:id', {
        templateUrl: 'views/ver.html',
        controller: 'VerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
