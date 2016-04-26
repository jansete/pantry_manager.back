require('rootpath')();
var aliment = require ('modules/aliment')

var pantry = {};

pantry.create = function(aliment1) {
  this.aliment1 = new aliment(aliment1);

  return this;
}

module.exports = pantry;