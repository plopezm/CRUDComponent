'use strict';

/**
 * @ngdoc function
 * @name angbappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angbappApp
 */
angular.module('angbappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tablecolumns = [
      "ID",
      "NAME",
      "LASTNAME",
      "PROJECT",
      "HOURS"
    ];

    $scope.tabledata = [
      {
        id: 1,
        name: "Pablo",
        lastname: "Lopez",
        project: "Whatever",
        hours: 123
      },
    ];

    //For modal variable
    $scope.showModal = false;


    //Events from tableviewer
    $scope.$on("ngCRUDComponents#DatatableCtrl#showItem", function (event, object) {
      console.log("SHOW event detected");
      $scope.showModal = true;
      $scope.infomsg = "Show completed"
    });

    $scope.$on("ngCRUDComponents#DatatableCtrl#updateItem", function (event, object) {
      console.log("UPDATE event detected");
      $scope.showModal = true;
      $scope.infomsg = "Update completed"
    });

    $scope.$on("ngCRUDComponents#DatatableCtrl#deleteItem", function (event, object) {
      console.log("DELETE event detected");
      $scope.showModal = true;
      $scope.infomsg = "Delete completed"
    });

  });
