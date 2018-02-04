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
        var result = factorilizeNumber(1000);
        assert.equal(result, Infinity, 'factorilizeNumber(1000) is Infinity');
    });
});

