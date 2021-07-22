let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('findItemsOver20 function', function() {
    it('should return all the products that have a quantity higher than 20', function() {
        assert.ok(
            findItemsOver20([
                { "name": "apples", "qty": 10 },
                { "name": "pears", "qty": 37 },
                { "name": "bananas", "qty": 27 },
                { "name": "apples", "qty": 3 }
            ], 20), [
                { "name": "pears", "qty": 37 },
                { "name": "bananas", "qty": 27 }
            ]);
    });

    it('should return all the products that have a quantity higher than 20 if not return 0.', function() {
        assert.ok(
            findItemsOver20([
                { name: 'apples', qty: 10 },
                { name: 'pears', qty: 1 },
                { name: 'bananas', qty: 7 },
                { name: 'apples', qty: 3 }

            ], 20), [

            ]);
    });

});