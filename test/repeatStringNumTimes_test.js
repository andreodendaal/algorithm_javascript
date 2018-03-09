/**
 * Created by Andre on 03/08/2018.
 */

let assert = require("assert");
let repeatStringNumTimes = require('../src/repeatStringNumTimes.js');

describe('repeatStringNumTimes', function () {
    it('Tests for string repeat num times for numbers > 0', function () {
        let result = repeatStringNumTimes("abc", -3);
        assert.equal(result, "", 'Repeat a given string("abc") -3 times is ""');
    });
});


describe('repeatStringNumTimes', function () {
    it('Tests for string repeat num times', function () {
        let result = repeatStringNumTimes("abc", 3);
        assert.equal(result, "abcabcabc", 'Repeat a given string("abc") 3 times is "abcabcabc"');
    });
});

describe('repeatStringNumTimes', function () {
    it('Tests for string repeat num times', function () {
        let result = repeatStringNumTimes("*", 3);
        assert.equal(result, "***", 'Repeat a given string("*") 3 times is "***"');
    });
});
