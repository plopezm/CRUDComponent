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

      $scope.nextPage = function () {
        if(!($scope.currentPage != null && $scope.maxPage != null) ||
          $scope.currentPage >= $scope.maxPage)
          return;
        $scope.currentPage++;
        $scope.$emit('ngCRUDComponents#DatatableCtrl#nextPage', $scope.currentPage);
      }

      $scope.previousPage = function () {
        if(!($scope.currentPage != null && $scope.maxPage != null) ||
          $scope.currentPage <= 1)
          return;
        $scope.currentPage--;
        $scope.$emit('ngCRUDComponents#DatatableCtrl#previousPage', $scope.currentPage);
      }


  });
