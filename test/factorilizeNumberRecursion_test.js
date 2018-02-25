/**
 * Created by Andre on 2/10/2018.
 */

var assert = require("assert");
var factorilizeNumberRecursion = require('../src/factorilizeNumberRecursion.js');

describe('factorilizeNumberRecursion', function () {
        it('factorilizes the number recursively', function () {
            var result = factorilizeNumberRecursion(5);
            assert.equal(result, 120, 'factorilizeNumber(5) is 120');
        });
});

describe('factorilizeNumberRecursion', function () {
    it('factorilizes the number', function () {
        var result = factorilizeNumberRecursion(0);
        assert.equal(result, 1, 'factorilizeNumber(0) is 1');
    });
});

describe('factorilizeNumberRecursion', function () {
    it('factorilizes the number', function () {
        var result = factorilizeNumberRecursion(1);
        assert.equal(result, 1, 'factorilizeNumber(1) is 1');
    });
});


describe('factorilizeNumberRecursion', function () {
    it('factorilizes the number', function () {
        var result = factorilizeNumberRecursion(20);
        assert.equal(result, 2432902008176640000, 'factorilizeNumber(20) is 2432902008176640000');
    });
});

describe('factorilizeNumberRecursion', function () {
    it('factorilizes the number', function () {
        var result = factorilizeNumberRecursion(10);
        assert.equal(result, 3628800, 'factorilizeNumber(10) is 3628800');
    });
});


