/**
 * Created by Andre on 2/24/2018.
 */

let assert = require("assert");
let titleCaseSentence = require('../src/titleCaseSentence.js');


describe('titleCaseSentence', function () {
    it('First letter of each word is capitalized', function () {
        let result = titleCaseSentence("The quick brown fox jumped over the lazy dog");

        assert.equal(result, "The Quick Brown Fox Jumped Over The Lazy Dog",
            'Every first character uppercase');
    });
});


describe('titleCaseSentence', function () {
    it('First letter of each word is capitalized', function () {
        let result = titleCaseSentence("I'm a little tea pot");

        assert.equal(result, "I'm A Little Tea Pot",
            'Every first character uppercase');
    });
});

describe('titleCaseSentence', function () {
    it('First letter of each word is capitalized', function () {
        let result = titleCaseSentence("HERE IS MY HANDLE HERE IS MY SPOUT");

        assert.equal(result, "Here Is My Handle Here Is My Spout",
            'Every first character uppercase');
    });
});
