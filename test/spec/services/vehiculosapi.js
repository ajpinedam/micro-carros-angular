'use strict';

describe('Service: vehiculosapi', function () {

  // load the service's module
  beforeEach(module('microCarrosApp'));

  // instantiate service
  var vehiculosapi;
  beforeEach(inject(function (_vehiculosapi_) {
    vehiculosapi = _vehiculosapi_;
  }));

  it('should do something', function () {
    expect(!!vehiculosapi).toBe(true);
  });

});
