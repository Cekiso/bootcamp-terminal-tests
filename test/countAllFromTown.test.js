let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('countAllFromTown', function() {
    it('should return number registration numbers in the string that is for that town that starts with CL', function() {
        assert.ok(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3);


    });
    it('should return number registration numbers in the string that is for that town that starts with CY', function() {
        assert.ok(countAllFromTown('CY 124,CY 567,CL 345, CJ 456,CL 341', 'CY'), 2);
    });

});