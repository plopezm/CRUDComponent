'use strict';

/**
 * @ngdoc directive
 * @name angbappApp.directive:datatable
 * @description
 * # datatable
 */
angular.module("ngCRUDComponents")
  .directive('crudDatatable', function(CRUD_CONSTANTS) {
    return {
      templateUrl: CRUD_CONSTANTS.DATATABLE_BASE_TEMPLATE_URL+"/datatable.html",
      restrict: 'E',
      controller: 'DatatableCtrl',
      scope:{
        tabletitle: '@',
        tablecolumns: '=',
        tabledata: '='
      },
    };
});
