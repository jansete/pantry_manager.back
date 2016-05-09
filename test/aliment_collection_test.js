var assert = require('chai').assert;
var Aliment = require('../src/classes/aliment.js');
var AlimentCollection = require('../src/classes/alimentCollection.js');

describe('Colección de alimentos', function() {

  it('Al instanciar devuelve un objeto', function () {
    var alimentCollection = new AlimentCollection();
    assert(typeof alimentCollection == 'object');
  });

  it('La colección tiene un alimento y una cantidad', function () {
    var alimentId = 2;
    var name = 'Calabacín';
    var aliment = new Aliment(alimentId, name);
    var alimentCollectionId = 1;
    var quantity = 5;
    var alimentCollection = new AlimentCollection(alimentCollectionId, aliment, quantity);
    assert.ok(alimentCollection.getId());
    assert(typeof alimentCollection.getId() == 'number');
    assert.ok(alimentCollection.getAliment());
    assert(typeof alimentCollection.getAliment() == 'object');
    assert.ok(alimentCollection.getQuantity());
    assert(typeof alimentCollection.getQuantity() == 'number');
  });

});