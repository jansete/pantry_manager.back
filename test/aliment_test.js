var assert = require('chai').assert;
var Aliment = require('../src/classes/aliment.js');

describe('Alimento', function() {
  it('Al instanciar devuelve un objeto', function () {
    var aliment = new Aliment();
    assert(typeof aliment == 'object');
  });
});