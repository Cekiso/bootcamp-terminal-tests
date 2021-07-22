let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck' ,  function() {    
    it('should return the registration number of GP ' ,  function() {        
        assert.ok(regCheck("DS 56 GP", "GP"),  1);    
    });    
    it('should return the registration number of MP' ,  function() {        
        assert.ok(regCheck('DV 23 LP MP', 'MP'),  1);    
    });
});