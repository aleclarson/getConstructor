var Nan, PureObject;

PureObject = require("PureObject");

Nan = require("Nan");

module.exports = function(value) {
  if (value == null) {
    return;
  }
  if (PureObject.test(value)) {
    return;
  }
  if (Nan.test(value)) {
    return;
  }
  return value.constructor;
};

//# sourceMappingURL=../../map/src/getConstructor.map
