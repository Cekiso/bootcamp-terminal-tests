let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday', function() {
    it('should return a string parameter to find out if the parameter passed in is a day of the week Which is Monday', function() {
        assert.strictEqual(isWeekday('M'), true);


    });
    it('should return Saturday ', function() {
        assert.strictEqual(isWeekday('S'), false);
    });
});