var pantry = function(id, name, capacity) {
  this._id = id;
  this._name = name;
  this._capacity = capacity;
  this._capacityAvailable = capacity;
  this._aliments = [];

  return this;
};

pantry.prototype.getId = function () {
  return this._id;
}

pantry.prototype.getName = function() {
  return this._name;
};

pantry.prototype.getCapacity = function() {
  return this._capacity;
};

pantry.prototype.getCapacityAvailable = function() {
  return this._capacityAvailable;
};

pantry.prototype.getAliments = function() {
  return this._aliments;
};

pantry.prototype._setCapacityAvailable = function(capacityAvailable) {
  this._capacityAvailable = capacityAvailable;
};

pantry.prototype.setAliments = function(alimentCollection) {
  if (alimentCollection.getQuantity() > this.getCapacityAvailable()) {
    return false;
  }
  else {
    this._aliments.push(alimentCollection);
    var capacityAvailable = this.getCapacityAvailable() - alimentCollection.getQuantity();
    this._setCapacityAvailable(capacityAvailable);
    return true;
  }
};

module.exports = pantry;