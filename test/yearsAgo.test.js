let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo', function() {
    it('should return how many years ago that 1998 is from the current year.', function() {
        assert.ok(yearsAgo(1999), 22);


    });

    it('should return how many years ago that 2021 is from the current year.', function() {
        assert.strictEqual(yearsAgo(2021), 0);


    });

});