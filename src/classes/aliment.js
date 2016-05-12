var aliment = function(id, name) {
  this._id = id;
  this._name = name;
  this._created = Math.floor(Date.now() / 1000);

  return this;
};

aliment.prototype.getId = function() {
  return this._id;
};

aliment.prototype.getName = function() {
  return this._name;
};

aliment.prototype.getCreatedDate = function() {
  return this._created;
};

module.exports = aliment;