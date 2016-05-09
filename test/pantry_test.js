var assert = require('chai').assert;
var Aliment = require('../src/classes/aliment.js');
var AlimentCollection = require('../src/classes/alimentCollection.js');
var Pantry = require('../src/classes/pantry.js');

describe('Despensa', function() {

  it('Al instanciar devuelve un objeto', function () {
    var pantry = new Pantry();
    assert(typeof pantry == 'object');
  });

  it('La despensa tiene un nombre y una capacidad', function () {
    var id = 1;
    var name = 'Despensa principal';
    var capacity = 1;
    var pantry = new Pantry(id, name, capacity);
    assert.ok(pantry.getId());
    assert(typeof pantry.getId() == 'number');
    assert.ok(pantry.getName());
    assert(typeof pantry.getName() == 'string');
    assert.ok(pantry.getCapacity());
    assert(typeof pantry.getCapacity() == 'number');
  });

  it('La despensa tiene colecciones de alimentos', function () {
    var id = 1;
    var name = 'Despensa principal';
    var capacity = 10;
    var pantry = new Pantry(id, name, capacity);

    var alimentId = 2;
    var alimentName = 'Calabacín';
    var aliment = new Aliment(alimentId, alimentName);
    var alimentCollectionId = 1;
    var quantity = 5;
    var alimentCollection = new AlimentCollection(alimentCollectionId, aliment, quantity);

    assert.ok(pantry.getAliments());
    assert(Array.isArray(pantry.getAliments()));
    assert.ok(pantry.setAliments(alimentCollection));
    assert(pantry.getAliments()[0].getAliment().getName() == 'Calabacín');
  });

  it('La despensa disminuye su capacidad al añadir alimentos', function() {
    var id = 1;
    var name = 'Despensa principal';
    var capacity = 4;
    var pantry = new Pantry(id, name, capacity);

    var alimentId = 2;
    var alimentName = 'Calabacín';
    var aliment = new Aliment(alimentId, alimentName);
    var alimentCollectionId = 1;
    var quantity = 3;
    var alimentCollection = new AlimentCollection(alimentCollectionId, aliment, quantity);

    assert(pantry.getCapacityAvailable() == 4);
    assert(pantry.setAliments(alimentCollection) == true);
    assert(pantry.getCapacityAvailable() == 1);
  });

  it('La despensa no puede tener más alimentos que su capacidad disponible', function() {
    var id = 1;
    var name = 'Despensa principal';
    var capacity = 1;
    var pantry = new Pantry(id, name, capacity);

    var alimentId = 2;
    var alimentName = 'Calabacín';
    var aliment = new Aliment(alimentId, alimentName);
    var alimentCollectionId = 1;
    var quantity = 5;
    var alimentCollection = new AlimentCollection(alimentCollectionId, aliment, quantity);

    assert(pantry.getCapacityAvailable() == 1);
    assert(pantry.setAliments(alimentCollection) == false);
  });

});