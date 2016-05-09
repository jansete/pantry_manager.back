var alimentCollection = function(id, aliment, quantity) {

  constructor.apply(this, [id, aliment, quantity]);

  function constructor(id, aliment, quantity) {
    this._id = id;
    this._aliment = aliment;
    this._quantity = quantity;
  }

  this.getId = function() {
    return this._id;
  };

  this.getAliment = function() {
    return this._aliment;
  };

  this.getQuantity = function() {
    return this._quantity;
  };

  return this;
};

module.exports = alimentCollection;