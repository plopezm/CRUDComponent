'use strict';

/**
 * @ngdoc directive
 * @name angbappApp.directive:modalWindow
 * @description
 * # modalWindow
 */
angular.module('ngCRUDComponents')
  .directive('modalWindow', function (CRUD_CONSTANTS) {
    return {
      templateUrl: CRUD_CONSTANTS.MODAL_BASE_TEMPLATE_URL+"/modalwindow.html",
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
