/**
 * Created by Family on 1/29/2018.
 */

var assert = require("assert");
var factorilizeNumber = require('../src/factorilizeNumber.js');

describe('factorilizeNumber', function () {
        it('factorilizes the number', function () {
            var result = factorilizeNumber(5);
            assert.equal(result, 120, 'factorilizeNumber(5) is 120');
        });
});

describe('factorilizeNumber', function () {
    it('factorilizes the number', function () {
        var result = factorilizeNumber(0);
        assert.equal(result, 1, 'factorilizeNumber(0) is 1');
    });
});

describe('factorilizeNumber', function () {
    it('factorilizes the number', function () {
        var result = factorilizeNumber(1);
        assert.equal(result, 1, 'factorilizeNumber(1) is 1');
    });
});


describe('factorilizeNumber', function () {
    it('factorilizes the number', function () {
        var result = factorilizeNumber(20);
        assert.equal(result, 2432902008176640000, 'factorilizeNumber(20) is 2432902008176640000');
    });
});

describe('factorilizeNumber', function () {
    it('factorilizes the number', function () {
        var result = factorilizeNumber(10);
        assert.equal(result, 3628800, 'factorilizeNumber(10) is 3628800');
    });
});


