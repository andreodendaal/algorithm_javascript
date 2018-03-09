/**
 * Created by Andre on 03/07/2018.
 */

let assert = require("assert");
let confirmEnding = require('../src/confirmEnding.js');

describe('confirmEnding', function () {
    it('Tests for confirmEnding', function () {
        let result = confirmEnding("Open sesame", "same");
        assert.equal(result, true, 'ending("Open sesame") is "same"');
    });
});

describe('confirmEnding', function () {
    it('Tests for confirmEnding', function () {
        let result = confirmEnding("Bastian", "n");
        assert.equal(result, true, 'ending("Bastian") is "n"');
    });
});

describe('confirmEnding', function () {
    it('Tests for confirmEnding', function () {
        let result = confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "frozen");
        assert.equal(result, true, 'ending is "frozen"');
    });
});