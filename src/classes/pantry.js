var privateProps = new WeakMap();

var pantry = (function() {
  function constructor(id, name, capacity) {
    privateProps.set(this, {
      _id: id,
      _name: name,
      _capacity: capacity,
      _capacityAvailable: capacity,
      _aliments: []
    });
  }

  constructor.prototype.getId = function () {
    return privateProps.get(this)._id;
  };

  constructor.prototype.getName = function () {
    return privateProps.get(this)._name;
  };

  constructor.prototype.getCapacity = function () {
    return privateProps.get(this)._capacity;
  };

  constructor.prototype.getCapacityAvailable = function () {
    return privateProps.get(this)._capacityAvailable;
  };

  constructor.prototype.getAliments = function () {
    return privateProps.get(this)._aliments;
  };

  constructor.prototype._setCapacityAvailable = function (capacityAvailable) {
    this._set('capacityAvailable', capacityAvailable);
  };

  constructor.prototype.setAliments = function (alimentCollection) {
    if (alimentCollection.getQuantity() > this.getCapacityAvailable()) {
      return false;
    }
    else {
      this._push('aliments', alimentCollection);
      var capacityAvailable = this.getCapacityAvailable() - alimentCollection.getQuantity();
      this._setCapacityAvailable(capacityAvailable);
      return true;
    }
  };

  constructor.prototype._set = function (key, value) {
    var _privatePantry = privateProps.get(this);
    _privatePantry['_' + key] = value;
    privateProps.set(this, _privatePantry);
  };

  constructor.prototype._push = function (key, object) {
    var _privatePantry = privateProps.get(this);
    _privatePantry['_' + key].push(object);
    privateProps.set(this, _privatePantry);
  };

  return constructor;
})();

module.exports = pantry;