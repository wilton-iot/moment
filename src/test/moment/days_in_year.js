define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var test = require("tape-compat");var module = test.QUnit.module;
var moment = require("moment");

module('days in year');

// https://github.com/moment/moment/issues/3717
test('YYYYDDD should not parse DDD=000', function (assert) {
    assert.equal(moment(7000000, moment.ISO_8601, true).isValid(), false);
    assert.equal(moment('7000000', moment.ISO_8601, true).isValid(), false);
    assert.equal(moment(7000000, moment.ISO_8601, false).isValid(), false);
});

return module.exports;});
