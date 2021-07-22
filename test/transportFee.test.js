let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee', function() {
    it('In the morning it should returns the right price based on the shift you are working', function() {
        assert.ok(transportFee('morning'), 'R20');


    });
    it('In the afternoon it should returns the right price based on the shift you are working', function() {
        assert.ok(transportFee('afternoon'), 'R10');


    });

});