'use strict';

describe('Controller: ModalwindowCtrl', function () {

  // load the controller's module
  beforeEach(module('angbappApp'));

  var ModalwindowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalwindowCtrl = $controller('ModalwindowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModalwindowCtrl.awesomeThings.length).toBe(3);
  });
});
