var assert = require('chai').assert;
var Aliment = require('../src/classes/aliment.js');

describe('Alimento', function() {

  it('Al instanciar devuelve un objeto', function () {
    var aliment = new Aliment();
    assert(typeof aliment == 'object');
  });

  it('El alimento tiene un id numérico, y un nombre string', function() {
    var id = 2;
    var name = 'Calabacín';
    var aliment = new Aliment(id, name);
    assert.ok(aliment.getId());
    assert.ok(aliment.getName());
    assert(typeof aliment.getId() == 'number');
    assert(typeof aliment.getName() == 'string');
  });

  it('Los atributos del alimento son privados', function() {
    var id = 2;
    var name = 'Calabacín';
    var aliment = new Aliment(id, name);
    assert.equal(aliment._id, undefined);
    assert.equal(aliment._name, undefined);
    assert.equal(aliment._created, undefined);
  });

  it('El alimento tiene una fecha de creación válida', function() {
    var id = 3;
    var name = 'Tomate';
    var created = Math.floor(Date.now() / 1000);
    var aliment = new Aliment(id, name);
    assert.ok(aliment.getCreatedDate());
    assert(typeof aliment.getCreatedDate() == 'number');
    assert.equal(aliment.getCreatedDate(), created);
  });

});
