/**
 * Created by Family on 1/29/2018.
 */

var assert = require("assert");
var reverseString = require('../src/reverseString.js');

describe('reverseString', function () {
    it('reverses the parameter string', function () {
        var result = reverseString("hello");

        assert.equal(result, "olleh", 'reverseString("hello") is "olleh"');

    });
});

