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

  constructor.prototype.setAliments = function (alimentCollection) {
    if (alimentCollection.getQuantity() > this.getCapacityAvailable()) {
      return false;
    }
    else {
      _push.apply(this, ['aliments', alimentCollection]);
      var capacityAvailable = this.getCapacityAvailable() - alimentCollection.getQuantity();
      _setCapacityAvailable.apply(this, [capacityAvailable]);
      return true;
    }
  };

  function _setCapacityAvailable(capacityAvailable) {
    _set.apply(this, ['capacityAvailable', capacityAvailable]);
  }

  function _set(key, value) {
    var _privatePantry = privateProps.get(this);
    _privatePantry['_' + key] = value;
    privateProps.set(this, _privatePantry);
  }

  function _push(key, object) {
    var _privatePantry = privateProps.get(this);
    _privatePantry['_' + key].push(object);
    privateProps.set(this, _privatePantry);
  }

  return constructor;
})();

module.exports = pantry;