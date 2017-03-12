'use strict';

/**
 * @ngdoc directive
 * @name angbappApp.directive:crudForm
 * @description
 * # crudForm
 */
angular.module('angbappApp')
  .directive('crudForm', function (CRUD_CONSTANTS) {
    return {
      templateUrl: CRUD_CONSTANTS.BASE_DIR+"/form/crudForm.html",
      restrict: 'E',
      scope: {
        object: "="
      },
    };
  });
