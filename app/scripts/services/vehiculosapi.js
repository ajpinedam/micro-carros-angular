'use strict';

/**
 * @ngdoc service
 * @name microCarrosApp.vehiculosapi
 * @description
 * # vehiculosapi
 * Service in the microCarrosApp.
 */
angular.module('microCarrosApp')
  .service('vehiculosapi', function vehiculosapi($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var url = "http://107.170.180.166:3000/api/vehicle";

    this.list = function list(){
    	 return $http.get(url).then(function(response){
    	 	return response.data;
    	 });
    };

    this.get = function get(id){

    	return $http.get(url + '/' + id).then(function(response){
    		return response.data;
    	});
    }
  });
