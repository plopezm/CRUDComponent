'use strict';

describe('Controller: DatatableCtrl', function () {

  // load the controller's module
  beforeEach(module('angbappApp'));

  var DatatableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatatableCtrl = $controller('DatatableCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DatatableCtrl.awesomeThings.length).toBe(3);
  });
});
