/**
 * Created by Family on 2/22/2018.
 */

var assert = require("assert");
var longestWordinString = require('../src/longestWordinString.js');

describe('longestWordinString', function () {
    it('returns the longest word in a String', function () {
        var result = longestWordinString("The quick brown fox jumped over the lazy dog");

        assert.equal(result, 6, 'longestWordinString("The quick brown fox jumped over the lazy dog") is 6"');

    });
});

describe('longestWordinString', function () {
    it('returns the longest word in a String', function () {
        var result = longestWordinString("May the force be with you");

        assert.equal(result, 5, 'longestWordinString("May the force be with you") is 5"');

    });
});


describe('longestWordinString', function () {
    it('returns the longest word in a String; 1st word - Google', function () {
        var result = longestWordinString("Google do a barrel roll");

        assert.equal(result, 6, 'longestWordinString("Google do a barrel roll") is 6"');

    });
});


describe('longestWordinString', function () {
    it('returns the longest word in a String', function () {
        var result = longestWordinString("What is the average airspeed velocity of an unladen swallow");

        assert.equal(result, 8, 'longestWordinString("What is the average airspeed velocity of an unladen swallow") is 8"');

    });
});


describe('longestWordinString', function () {
    it('returns the longest word in a String', function () {
        var result = longestWordinString("What if we try a super-long word such as otorhinolaryngology");

        assert.equal(result, 19, 'longestWordinString("What if we try a super-long word such as otorhinolaryngology") is 19"');

    });
});

describe('longestWordinString', function () {
    it('returns the longest word in a String - one word string', function () {
        var result = longestWordinString("a");

        assert.equal(result, 1, 'longestWordinString("a") is 1"');

    });
});