var aliment = function(id, name) {

  constructor.apply(this, [id, name]);

  function constructor(id, name) {
    this._id = id;
    this._name = name;
    this._created = Math.floor(Date.now() / 1000);
  }

  this.getId = function() {
    return this._id;
  };

  this.getName = function() {
    return this._name;
  };

  this.getCreatedDate = function() {
    return this._created;
  };

  return this;
};

module.exports = aliment;