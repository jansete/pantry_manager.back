var assert = require('chai').assert;
var Aliment = require('../src/classes/aliment.js');
var AlimentCollection = require('../src/classes/alimentCollection.js');

describe('Colección de alimentos', function() {

  it('Al instanciar devuelve un objeto', function () {
    var alimentCollection = new AlimentCollection();
    assert(typeof alimentCollection == 'object');
  });

  it('Los atributos de una colección de alimentos son privados', function() {
    var id_platano = 10;
    var name_platano = 'Plátano';
    var platano = new Aliment(id_platano, name_platano);
    var id_platanos = 1;
    var platanos_quantity = 5;
    var platanos = new AlimentCollection(id_platanos, platano, platanos_quantity);

    assert.equal(platanos._id, undefined);
    assert.equal(platanos._aliment, undefined);
    assert.equal(platanos._quantity, undefined);
  });

  it('Las propiedades son únicas del objeto', function() {
    var id_platano = 10;
    var name_platano = 'Plátano';
    var platano = new Aliment(id_platano, name_platano);
    var id_platanos = 1;
    var platanos_quantity = 5;
    var platanos = new AlimentCollection(id_platanos, platano, platanos_quantity);

    var id_naranja = 11;
    var name_naranja = 'Naranja';
    var naranja = new Aliment(id_naranja, name_naranja);
    var id_naranjas = 1;
    var naranjas_quantity = 5;
    var naranjas = new AlimentCollection(id_naranjas, naranja, naranjas_quantity);
    
    assert.equal(platanos.getId(), id_platanos);
    assert.equal(platanos.getAliment(), platano);
    assert.equal(platanos.getQuantity(), platanos_quantity);

    assert.equal(naranjas.getId(), id_naranjas);
    assert.equal(naranjas.getAliment(), naranja);
    assert.equal(naranjas.getQuantity(), naranjas_quantity);
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