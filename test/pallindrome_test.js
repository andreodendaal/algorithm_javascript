/**
 * Created by Andre on 02/04/2018.
 */

var assert = require("assert");
var palindrome = require('../src/palindrome.js');

describe('palindrome', function () {
    it('Tests for palindrome', function () {
        var result = palindrome("_eye");
        assert.equal(result, true, 'palindrome("_eye") is "eye"');
    });
});

describe('palindrome', function () {
    it('Tests for palindrome', function () {
        var result = palindrome("racecar");
        assert.equal(result, true, 'palindrome("racecar") is "racecar"');
    });
});

describe('palindrome', function () {
    it('Tests for palindrome', function () {
        var result = palindrome("Racecar");
        assert.equal(result, true, 'palindrome("racecar") is "racecar"');
    });
});

describe('palindrome', function () {
    it('Tests for palindrome', function () {
        var result = palindrome("egg");
        assert.equal(result, false, 'palindrome("egg") is "gge"');
    });
});


describe('palindrome', function () {
    it('Tests for palindrome', function () {
        var result = palindrome("race car");
        assert.equal(result, true, 'palindrome("race car") is "racecare"');
    });
});


describe('palindrome', function () {
    it('Tests for palindrome', function () {
        var result = palindrome("@2A3*3a2");
        assert.equal(result, true, 'palindrome("2A3*3a2") is "aa"');
    });
});
