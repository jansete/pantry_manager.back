var assert = require('chai').assert;
var Aliment = require('../src/classes/aliment.js');
var AlimentCollection = require('../src/classes/alimentCollection.js');

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

describe('Colección de alimentos', function() {

  it('Al instanciar devuelve un objeto', function () {
    var alimentCollection = new AlimentCollection();
    assert(typeof alimentCollection == 'object');
  });

  it('La colección tiene un alimento y una cantidad', function () {
  });

});