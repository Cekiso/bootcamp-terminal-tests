let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl', function() {
    it('returns the number of registration numbers in the string for Paarl.', function() {
        assert.ok(countAllPaarl("CJ 123"), 1);


    });


});