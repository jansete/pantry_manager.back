var aliment = (function() {
  var _id, _name, _created;

  function constructor(id, name) {
    _id = id;
    _name = name;
    _created = Math.floor(Date.now() / 1000);
  };

  constructor.prototype.getId = function() {
    return _id;
  };

  constructor.prototype.getName = function() {
    return _name;
  };

  constructor.prototype.getCreatedDate = function() {
    return _created;
  };

  return constructor;
})();
 

module.exports = aliment;