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
    var pantry = createSingleAlimentPantry();
    assert.ok(pantry.getId());
    assert.equal(typeof pantry.getId(), 'number');
    assert.ok(pantry.getName());
    assert.equal(typeof pantry.getName(), 'string');
    assert.ok(pantry.getCapacity());
    assert.equal(typeof pantry.getCapacity(), 'number');

  });

  it('La despensa tiene colecciones de alimentos', function () {
    var pantry = createPantryWithCapacity(10);

    var aliment = createZucchini();
    var alimentCollection = createAlimentCollection(aliment);

    assert.ok(pantry.getAliments());
    assert.equal(Array.isArray(pantry.getAliments()), true);
    assert.ok(pantry.setAliments(alimentCollection));
    assert.equal(pantry.getAliments()[0].getAliment().getName(), 'Calabacín');
  });

  it('La despensa disminuye su capacidad al añadir alimentos', function() {
    var capacity = 4;
    var pantry = createPantryWithCapacity(capacity);
    var initialCapacity = pantry.getCapacityAvailable();

    var alimentId = 2;
    var alimentName = 'Calabacín';
    var aliment = new Aliment(alimentId, alimentName);
    var alimentCollectionId = 1;
    var quantity = 3;
    var alimentCollection = new AlimentCollection(alimentCollectionId, aliment, quantity);

    assert(initialCapacity == capacity);
    assert(pantry.setAliments(alimentCollection) == true);
    var finalCapacity = pantry.getCapacityAvailable();
    assert(initialCapacity - finalCapacity == alimentCollection.getQuantity());
  });

  it('La despensa no puede tener más alimentos que su capacidad disponible', function() {
    var pantry = createSingleAlimentPantry();

    var alimentId = 2;
    var alimentName = 'Calabacín';
    var aliment = new Aliment(alimentId, alimentName);
    var alimentCollectionId = 1;
    var quantity = 5;
    var alimentCollection = new AlimentCollection(alimentCollectionId, aliment, quantity);

    assert(pantry.getCapacityAvailable() == 1);
    assert(pantry.setAliments(alimentCollection) == false);
  });

  function createSingleAlimentPantry() {
    return createPantryWithCapacity(1);
  }

  function createPantryWithCapacity(capacity) {
    var id = 1;
    var name = 'Despensa principal';
    return new Pantry(id, name, capacity);
  }

  function createZucchini() {
    var alimentId = 2;
    var alimentName = 'Calabacín';
    return new Aliment(alimentId, alimentName);
  }

  function createAlimentCollection(aliment) {
    var alimentCollectionId = 1;
    var quantity = 5;
    return new AlimentCollection(alimentCollectionId, aliment, quantity);
  }
    

});