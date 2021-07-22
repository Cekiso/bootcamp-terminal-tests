let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill', function() {
    it('should return the total phone bill in that is used in sms and calls', function() {
        assert.ok(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');


    });
    it('should return the total phone bill in that is used in sms and calls', function() {
        assert.ok(totalPhoneBill('call, sms, call, sms'), 'R6.80');


    });

});