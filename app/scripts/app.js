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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
