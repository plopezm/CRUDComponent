'use strict';

/**
 * @ngdoc function
 * @name angbappApp.controller:DatatableCtrl
 * @description
 * # DatatableCtrl
 * Controller of the angbappApp
 */
angular.module('ngCRUDComponents')
  .controller('DatatableCtrl', function ($scope) {
      var vm = this;

      $scope.showItem = function(dataObject) {
        $scope.$emit('ngCRUDComponents#DatatableCtrl#showItem', dataObject);
      }

      $scope.updateItem = function(dataObject){
        $scope.$emit('ngCRUDComponents#DatatableCtrl#updateItem', dataObject);
      }

      $scope.deleteItem = function(dataObject){
        $scope.$emit('ngCRUDComponents#DatatableCtrl#deleteItem', dataObject);
      }
  });
