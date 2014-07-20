'use strict';

describe('Controller: VerCtrl', function () {

  // load the controller's module
  beforeEach(module('microCarrosApp'));

  var VerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerCtrl = $controller('VerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
