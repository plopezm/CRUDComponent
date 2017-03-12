/**
 * Created by Pablo López Martínez on 12/03/2017.
 */
angular
  .module("ngCRUDComponents", [
  ])
  .constant('CRUD_CONSTANTS', (function () {
    return {
      DATATABLE_BASE_TEMPLATE_URL: '/crudmodule/datatable',
      MODAL_BASE_TEMPLATE_URL: '/crudmodule/modal',
    }
  })());
