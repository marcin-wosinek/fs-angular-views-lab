'use strict';

/**
 * @ngdoc function
 * @name fsAngularViewsLabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fsAngularViewsLabApp
 */
angular.module('fsAngularViewsLabApp')
  .controller('MainCtrl', function($scope) {
    $scope.list = [
      'mouse',
      'duck'
    ];

    $scope.increaseCounter = function() {
    };
  });
