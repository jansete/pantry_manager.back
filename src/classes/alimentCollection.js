var privateProps = new WeakMap();

var alimentCollection = (function() {
  function constructor(id, aliment, quantity) {
    privateProps.set(this, {
      _id: id,
      _aliment: aliment,
      _quantity: quantity
    });
  };

  constructor.prototype.getId = function() {
    return privateProps.get(this)._id;
  };

  constructor.prototype.getAliment = function() {
    return privateProps.get(this)._aliment;
  };

  constructor.prototype.getQuantity = function() {
    return privateProps.get(this)._quantity;
  };

  return constructor;
})()

module.exports = alimentCollection;