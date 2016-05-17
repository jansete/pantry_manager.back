var privateProps = new WeakMap();

var aliment = (function() {

  function constructor(id, name) {
    privateProps.set(this, {
      _id: id,
      _name: name,
      _created: Math.floor(Date.now() / 1000)
    });
  }

  constructor.prototype.getId = function() {
    return privateProps.get(this)._id;
  };

  constructor.prototype.getName = function() {
    return privateProps.get(this)._name;
  };

  constructor.prototype.getCreatedDate = function() {
    return privateProps.get(this)._created;
  };

  return constructor;
})();
 
module.exports = aliment;