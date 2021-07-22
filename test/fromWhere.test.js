let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere', function() {
    it('It should return Cape Town', function() {
        assert.ok(fromWhere('CA 123'), 'Cape Town');

    });
    it('It should return Paarl registration numberr!', function() {
        assert.ok(fromWhere('CJ 123'), 'Paarl');

    });
    it('It should return some other place!', function() {
        assert.ok(fromWhere('GP 123'), 'Some other place!');

    });
});