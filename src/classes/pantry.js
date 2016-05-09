var pantry = function(id, name, capacity) {

  constructor.apply(this, [id, name, capacity]);

  function constructor(id, name, capacity) {
    this._id = id;
    this._name = name;
    this._capacity = capacity;
    this._capacityAvailable = capacity;
    this._aliments = [];
  }

  this.getId = function() {
    return this._id;
  };

  this.getName = function() {
    return this._name;
  };

  this.getCapacity = function() {
    return this._capacity;
  };

  this.getCapacityAvailable = function() {
    return this._capacityAvailable;
  };

  this.getAliments = function() {
    return this._aliments;
  };

  this._setCapacityAvailable = function(capacityAvaiable) {
    this._capacityAvailable = capacityAvaiable;
  };

  this.setAliments = function(alimentCollection) {
    if (alimentCollection.getQuantity() > this.getCapacityAvailable()) {
      return false;
    }
    else {
      this._aliments.push(alimentCollection);
      var capacityAvaiable = this.getCapacityAvailable() - alimentCollection.getQuantity();
      this._setCapacityAvailable(capacityAvaiable);
      return true;
    }
  };

  return this;
};

module.exports = pantry;