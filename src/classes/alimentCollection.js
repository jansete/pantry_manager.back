var alimentCollection = function(id, aliment, quantity) {
  this._id = id;
  this._aliment = aliment;
  this._quantity = quantity;
  
  return this;
};

alimentCollection.prototype.getId = function() {
  return this._id;
};

alimentCollection.prototype.getAliment = function() {
  return this._aliment;
};

alimentCollection.prototype.getQuantity = function() {
  return this._quantity;
};

module.exports = alimentCollection;