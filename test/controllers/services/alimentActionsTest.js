require('rootpath')();

var Aliment = require("modules/aliment.js");

exports['create aliment in the pantry'] = function (test) {

  var pantry = Aliment.create("alimento 1");

  test.equal(pantry.aliment1.name(), "alimento 1");

  test.done();

}