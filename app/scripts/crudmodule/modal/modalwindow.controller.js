'use strict';

/**
 * @ngdoc function
 * @name angbappApp.controller:ModalwindowCtrl
 * @description
 * # ModalwindowCtrl
 * Controller of the angbappApp
 */
angular.module('angbappApp')
  .controller('ModalwindowCtrl', function ($scope) {
    $scope.showModal = false;
    $scope.buttonClicked = "";
    $scope.toggleModal = function(btnClicked){
      $scope.buttonClicked = btnClicked;
      $scope.showModal = !$scope.showModal;
    };
  });
