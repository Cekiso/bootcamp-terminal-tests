let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville', function() {
    it('should returns true if a registration number is for Bellville', function() {
        assert.ok(isFromBellville("CY 123"), true);


    });
    it('should returns false if the registratrion number is not from Bellville', function() {
        assert.strictEqual(isFromBellville("CA 123"), false);
    });

    it('should returns false if the registratrion number is not from Bellville', function() {
        assert.strictEqual(isFromBellville("GP 123"), false);
    });
});