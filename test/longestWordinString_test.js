/**
 * Created by Family on 2/22/2018.
 */

let assert = require("assert");
let titleCaseSentence = require('../src/longestWordinString.js');
// import {titleCaseSentence} from "../src/titleCaseSentence.js";

describe('titleCaseSentence', function () {
    it('returns the longest word in a String', function () {
        let result = titleCaseSentence("The quick brown fox jumped over the lazy dog");

        assert.equal(result, 6, 'titleCaseSentence("The quick brown fox jumped over the lazy dog") is 6"');

    });
});

describe('titleCaseSentence', function () {
    it('returns the longest word in a String', function () {
        var result = titleCaseSentence("May the force be with you");

        assert.equal(result, 5, 'titleCaseSentence("May the force be with you") is 5"');

    });
});


describe('titleCaseSentence', function () {
    it('returns the longest word in a String; 1st word - Google', function () {
        var result = titleCaseSentence("Google do a barrel roll");

        assert.equal(result, 6, 'titleCaseSentence("Google do a barrel roll") is 6"');

    });
});


describe('titleCaseSentence', function () {
    it('returns the longest word in a String', function () {
        var result = titleCaseSentence("What is the average airspeed velocity of an unladen swallow");

        assert.equal(result, 8, 'titleCaseSentence("What is the average airspeed velocity of an unladen swallow") is 8"');

    });
});


describe('titleCaseSentence', function () {
    it('returns the longest word in a String', function () {
        var result = titleCaseSentence("What if we try a super-long word such as otorhinolaryngology");

        assert.equal(result, 19, 'titleCaseSentence("What if we try a super-long word such as otorhinolaryngology") is 19"');

    });
});

describe('titleCaseSentence', function () {
    it('returns the longest word in a String - one word string', function () {
        var result = titleCaseSentence("a");

        assert.equal(result, 1, 'titleCaseSentence("a") is 1"');

    });
});