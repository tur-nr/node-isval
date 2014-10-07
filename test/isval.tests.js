var is = require('../')
  , assert = require('assert');

describe('#isval', function() {
  it('should validate string', function() {
    assert.ok(is('', 'string'));
    assert.ok(is('', String));

    assert.ok(!is('', 'NaN'));
    assert.ok(!is('', NaN));
    assert.ok(!is('', 'number'));
    assert.ok(!is('', 'boolean'));
    assert.ok(!is('', 'function'));
    assert.ok(!is('', 'object'));
    assert.ok(!is('', 'array'));
    assert.ok(!is('', 'regex'));
    assert.ok(!is('', 'regexp'));
    assert.ok(!is('', 'date'));
    assert.ok(!is('', 'null'));
    assert.ok(!is('', null));
    assert.ok(!is('', 'undefined'));
    assert.ok(!is('', undefined));
    assert.ok(!is('', 'arguments'));
    assert.ok(!is('', Date));
    assert.ok(!is('', Boolean));
    assert.ok(!is('', Number));
    assert.ok(!is('', Function));
    assert.ok(!is('', Object));
    assert.ok(!is('', Array));
  });

  it('should validate number', function() {
    assert.ok(is(0, 'number'));
    assert.ok(is(0, Number));

    assert.ok(!is(0, 'NaN'));
    assert.ok(!is(0, NaN));
    assert.ok(!is(0, 'string'));
    assert.ok(!is(0, 'boolean'));
    assert.ok(!is(0, 'function'));
    assert.ok(!is(0, 'object'));
    assert.ok(!is(0, 'array'));
    assert.ok(!is(0, 'regex'));
    assert.ok(!is(0, 'regexp'));
    assert.ok(!is(0, 'date'));
    assert.ok(!is(0, 'null'));
    assert.ok(!is(0, null));
    assert.ok(!is(0, 'undefined'));
    assert.ok(!is(0, undefined));
    assert.ok(!is(0, 'arguments'));
    assert.ok(!is(0, Date));
    assert.ok(!is(0, String));
    assert.ok(!is(0, Boolean));
    assert.ok(!is(0, Function));
    assert.ok(!is(0, Object));
    assert.ok(!is(0, Array));
  });

  it('should validate boolean', function() {
    assert.ok(is(true, 'boolean'));
    assert.ok(is(true, Boolean));

    assert.ok(!is(true, 'NaN'));
    assert.ok(!is(true, NaN));
    assert.ok(!is(true, 'string'));
    assert.ok(!is(true, 'number'));
    assert.ok(!is(true, 'function'));
    assert.ok(!is(true, 'object'));
    assert.ok(!is(true, 'array'));
    assert.ok(!is(true, 'regex'));
    assert.ok(!is(true, 'regexp'));
    assert.ok(!is(true, 'date'));
    assert.ok(!is(true, 'null'));
    assert.ok(!is(true, null));
    assert.ok(!is(true, 'undefined'));
    assert.ok(!is(true, undefined));
    assert.ok(!is(true, 'arguments'));
    assert.ok(!is(true, Date));
    assert.ok(!is(true, String));
    assert.ok(!is(true, Number));
    assert.ok(!is(true, Function));
    assert.ok(!is(true, Object));
    assert.ok(!is(true, Array));
  });

  it('should validate function', function() {
    var fn = function() {};

    assert.ok(is(fn, 'function'));
    assert.ok(is(fn, Function));

    assert.ok(!is(fn, 'NaN'));
    assert.ok(!is(fn, NaN));
    assert.ok(!is(fn, 'boolean'));
    assert.ok(!is(fn, 'string'));
    assert.ok(!is(fn, 'number'));
    assert.ok(!is(fn, 'object'));
    assert.ok(!is(fn, 'array'));
    assert.ok(!is(fn, 'regex'));
    assert.ok(!is(fn, 'regexp'));
    assert.ok(!is(fn, 'date'));
    assert.ok(!is(fn, 'null'));
    assert.ok(!is(fn, null));
    assert.ok(!is(fn, 'undefined'));
    assert.ok(!is(fn, undefined));
    assert.ok(!is(fn, 'arguments'));
    assert.ok(!is(fn, Date));
    assert.ok(!is(fn, String));
    assert.ok(!is(fn, Boolean));
    assert.ok(!is(fn, Number));
    assert.ok(!is(fn, Object));
    assert.ok(!is(fn, Array));
  });

  it('should validate object', function() {
    assert.ok(is({}, 'object'));
    assert.ok(is({}, Object));

    assert.ok(!is({}, 'NaN'));
    assert.ok(!is({}, NaN));
    assert.ok(!is({}, 'function'));
    assert.ok(!is({}, 'boolean'));
    assert.ok(!is({}, 'string'));
    assert.ok(!is({}, 'number'));
    assert.ok(!is({}, 'array'));
    assert.ok(!is({}, 'regex'));
    assert.ok(!is({}, 'regexp'));
    assert.ok(!is({}, 'date'));
    assert.ok(!is({}, 'null'));
    assert.ok(!is({}, null));
    assert.ok(!is({}, 'undefined'));
    assert.ok(!is({}, undefined));
    assert.ok(!is({}, 'arguments'));
    assert.ok(!is({}, Date));
    assert.ok(!is({}, String));
    assert.ok(!is({}, Boolean));
    assert.ok(!is({}, Number));
    assert.ok(!is({}, Function));
    assert.ok(!is({}, Array));
  });

  it('should validate array', function() {
    assert.ok(is([], 'array'));
    assert.ok(is([], 'object'));
    assert.ok(is([], Array));
    assert.ok(is([], Object));

    assert.ok(!is([], 'NaN'));
    assert.ok(!is([], NaN));
    assert.ok(!is([], 'function'));
    assert.ok(!is([], 'boolean'));
    assert.ok(!is([], 'string'));
    assert.ok(!is([], 'number'));
    assert.ok(!is([], 'regex'));
    assert.ok(!is([], 'regexp'));
    assert.ok(!is([], 'date'));
    assert.ok(!is([], 'null'));
    assert.ok(!is([], null));
    assert.ok(!is([], 'undefined'));
    assert.ok(!is([], undefined));
    assert.ok(!is([], 'arguments'));
    assert.ok(!is([], Date));
    assert.ok(!is([], String));
    assert.ok(!is([], Boolean));
    assert.ok(!is([], Number));
    assert.ok(!is([], Function));
  });

  it('should validate regex', function() {
    var reg = new RegExp();

    assert.ok(is(reg, 'regex'));
    assert.ok(is(reg, 'regexp'));
    assert.ok(is(reg, 'object'));
    assert.ok(is(reg, RegExp));
    assert.ok(is(reg, Object));

    assert.ok(!is(reg, 'NaN'));
    assert.ok(!is(reg, NaN));
    assert.ok(!is(reg, 'array'));
    assert.ok(!is(reg, 'function'));
    assert.ok(!is(reg, 'boolean'));
    assert.ok(!is(reg, 'string'));
    assert.ok(!is(reg, 'number'));
    assert.ok(!is(reg, 'date'));
    assert.ok(!is(reg, 'null'));
    assert.ok(!is(reg, null));
    assert.ok(!is(reg, 'undefined'));
    assert.ok(!is(reg, undefined));
    assert.ok(!is(reg, 'arguments'));
    assert.ok(!is(reg, Date));
    assert.ok(!is(reg, String));
    assert.ok(!is(reg, Boolean));
    assert.ok(!is(reg, Number));
    assert.ok(!is(reg, Function));
    assert.ok(!is(reg, Array));
  });

  it('should validate date', function() {
    var date = new Date();

    assert.ok(is(date, 'date'));
    assert.ok(is(date, Date));
    assert.ok(is(date, 'object'));
    assert.ok(is(date, Object));

    assert.ok(!is(date, 'NaN'));
    assert.ok(!is(date, NaN));
    assert.ok(!is(date, 'regex'));
    assert.ok(!is(date, 'regexp'));
    assert.ok(!is(date, 'array'));
    assert.ok(!is(date, 'function'));
    assert.ok(!is(date, 'boolean'));
    assert.ok(!is(date, 'string'));
    assert.ok(!is(date, 'number'));
    assert.ok(!is(date, 'null'));
    assert.ok(!is(date, null));
    assert.ok(!is(date, 'undefined'));
    assert.ok(!is(date, undefined));
    assert.ok(!is(date, 'arguments'));
    assert.ok(!is(date, RegExp));
    assert.ok(!is(date, String));
    assert.ok(!is(date, Boolean));
    assert.ok(!is(date, Number));
    assert.ok(!is(date, Function));
    assert.ok(!is(date, Array));
  });

  it('should validate null', function() {
    assert.ok(is(null, 'null'));
    assert.ok(is(null, null));

    assert.ok(!is(null, 'NaN'));
    assert.ok(!is(null, NaN));
    assert.ok(!is(null, 'date'));
    assert.ok(!is(null, Date));
    assert.ok(!is(null, 'object'));
    assert.ok(!is(null, 'regex'));
    assert.ok(!is(null, 'regexp'));
    assert.ok(!is(null, 'array'));
    assert.ok(!is(null, 'function'));
    assert.ok(!is(null, 'boolean'));
    assert.ok(!is(null, 'string'));
    assert.ok(!is(null, 'number'));
    assert.ok(!is(null, 'undefined'));
    assert.ok(!is(null, undefined));
    assert.ok(!is(null, 'arguments'));
    assert.ok(!is(null, RegExp));
    assert.ok(!is(null, String));
    assert.ok(!is(null, Boolean));
    assert.ok(!is(null, Number));
    assert.ok(!is(null, Function));
    assert.ok(!is(null, Object));
    assert.ok(!is(null, Array));
  });

  it('should validate undefined', function() {
    assert.ok(is(undefined, 'undefined'));
    assert.ok(is(undefined, undefined));

    assert.ok(!is(undefined, 'NaN'));
    assert.ok(!is(undefined, NaN));
    assert.ok(!is(undefined, 'date'));
    assert.ok(!is(undefined, Date));
    assert.ok(!is(undefined, 'object'));
    assert.ok(!is(undefined, 'regex'));
    assert.ok(!is(undefined, 'regexp'));
    assert.ok(!is(undefined, 'array'));
    assert.ok(!is(undefined, 'function'));
    assert.ok(!is(undefined, 'boolean'));
    assert.ok(!is(undefined, 'string'));
    assert.ok(!is(undefined, 'number'));
    assert.ok(!is(undefined, 'null'));
    assert.ok(!is(undefined, null));
    assert.ok(!is(undefined, 'arguments'));
    assert.ok(!is(undefined, RegExp));
    assert.ok(!is(undefined, String));
    assert.ok(!is(undefined, Boolean));
    assert.ok(!is(undefined, Number));
    assert.ok(!is(undefined, Function));
    assert.ok(!is(undefined, Object));
    assert.ok(!is(undefined, Array));
  });

  it('should validate NaN', function() {
    assert.ok(is(NaN, 'NaN'));
    assert.ok(is(NaN, NaN));

    assert.ok(!is(NaN, 'undefined'));
    assert.ok(!is(NaN, undefined));
    assert.ok(!is(NaN, 'date'));
    assert.ok(!is(NaN, Date));
    assert.ok(!is(NaN, 'object'));
    assert.ok(!is(NaN, 'regex'));
    assert.ok(!is(NaN, 'regexp'));
    assert.ok(!is(NaN, 'array'));
    assert.ok(!is(NaN, 'function'));
    assert.ok(!is(NaN, 'boolean'));
    assert.ok(!is(NaN, 'string'));
    assert.ok(!is(NaN, 'number'));
    assert.ok(!is(NaN, 'null'));
    assert.ok(!is(NaN, null));
    assert.ok(!is(NaN, 'arguments'));
    assert.ok(!is(NaN, RegExp));
    assert.ok(!is(NaN, String));
    assert.ok(!is(NaN, Boolean));
    assert.ok(!is(NaN, Number));
    assert.ok(!is(NaN, Object));
    assert.ok(!is(NaN, Function));
    assert.ok(!is(NaN, Array));
  });

  it('should validate arguments', function() {
    assert.ok(is(arguments, 'arguments'));
    assert.ok(is(arguments, 'object'));
    assert.ok(is(arguments, Object));

    assert.ok(!is(arguments, 'NaN'));
    assert.ok(!is(arguments, NaN));
    assert.ok(!is(arguments, 'undefined'));
    assert.ok(!is(arguments, undefined));
    assert.ok(!is(arguments, 'date'));
    assert.ok(!is(arguments, Date));
    assert.ok(!is(arguments, 'regex'));
    assert.ok(!is(arguments, 'regexp'));
    assert.ok(!is(arguments, 'array'));
    assert.ok(!is(arguments, 'function'));
    assert.ok(!is(arguments, 'boolean'));
    assert.ok(!is(arguments, 'string'));
    assert.ok(!is(arguments, 'number'));
    assert.ok(!is(arguments, 'null'));
    assert.ok(!is(arguments, null));
    assert.ok(!is(arguments, String));
    assert.ok(!is(arguments, Boolean));
    assert.ok(!is(arguments, Number));
    assert.ok(!is(arguments, Function));
    assert.ok(!is(arguments, Array));
  });

  it('should validate instanceof', function() {
    var inst = new Test();

    function Test() {}

    assert.ok(is(inst, Test));
    assert.ok(is(inst, 'object'));
    assert.ok(is(inst, Object));

    assert.ok(!is(inst, 'NaN'));
    assert.ok(!is(inst, NaN));
    assert.ok(!is(inst, 'undefined'));
    assert.ok(!is(inst, undefined));
    assert.ok(!is(inst, 'date'));
    assert.ok(!is(inst, Date));
    assert.ok(!is(inst, 'regex'));
    assert.ok(!is(inst, 'regexp'));
    assert.ok(!is(inst, 'array'));
    assert.ok(!is(inst, 'function'));
    assert.ok(!is(inst, 'boolean'));
    assert.ok(!is(inst, 'string'));
    assert.ok(!is(inst, 'number'));
    assert.ok(!is(inst, 'null'));
    assert.ok(!is(inst, null));
    assert.ok(!is(inst, 'arguments'));
    assert.ok(!is(inst, String));
    assert.ok(!is(inst, Boolean));
    assert.ok(!is(inst, Number));
    assert.ok(!is(inst, Function));
    assert.ok(!is(inst, Array));
  });

  it('should validate truthy value', function() {
    assert.ok(is(true));
    assert.ok(is('true'));
    assert.ok(is(1));
    assert.ok(is({}));
    assert.ok(is([]));
    assert.ok(is(new Date()));

    assert.ok(!is(false));
    assert.ok(!is(''));
    assert.ok(!is(0));
    assert.ok(!is(null));
    assert.ok(!is(undefined));
    assert.ok(!is(NaN));
  });
});