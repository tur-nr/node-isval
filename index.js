(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root['isval'] = factory();
  }
})(this, function() {
  return function isval(value, type) {
    if (arguments.length === 2 && typeof type === 'undefined') {
      type = 'undefined';
    } else if (isNaN_(type)) {
      type = 'NaN';
    }

    function isNaN_(num) {
      if (typeof Number.isNaN === 'function') {
        return Number.isNaN(num);
      } else {
        return num !== num;
      }
    }

    function isObject(obj) {
      return typeof value === 'object' && value !== null;
    }

    function constructorType(constructor) {
      return constructor.name.toLowerCase();
    }

    function isGenerator(obj) {
      return obj &&
        typeof obj.next === 'function' &&
        typeof obj.throw === 'function'
    }

    function isGeneratorFunction(fn) {
      return typeof fn === 'function' &&
        fn.constructor &&
        fn.constructor.name === 'GeneratorFunction'
    }

    switch (type) {
      case 'boolean':
      case 'function':
      case 'string':
        return typeof value === type;

      case 'number':
        return typeof value === type && !isNaN(value);

      case Number:
        if (isNaN_(value)) { return false; }
      // fall through
      case String:
      case Boolean:
        return typeof value === constructorType(type);

      case Object:
      case 'object':
        return isObject(value);

      case 'array':
        return Array.isArray(value);

      case 'regex':
      case 'regexp':
        return value instanceof RegExp;

      case 'date':
        return value instanceof Date;

      case 'null':
      case null:
        return value === null;

      case 'undefined':
        return typeof value === 'undefined';

      case 'NaN':
        return isNaN_(value);

      case 'arguments':
        if (isObject(value)) {
          return (typeof value.callee === 'function')
            || (/arguments/i).test(value.toString());
        }
        return false;

      case 'integer':
        return isval(value, 'number') && value % 1 === 0;

      case 'generator':
        return isGenerator(value);

      case 'generator*':
        return isGeneratorFunction(value);

      default:
        return (typeof type === 'function')
          ? value instanceof type
          : value;
    }
  };
});
