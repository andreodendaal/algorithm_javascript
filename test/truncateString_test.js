/**
 * Created by Andre on 03/08/2018.
 */

let assert = require("assert");
let truncateString = require('../src/truncateString.js');


describe('truncateString', function () {
    it('Tests for truncate string "n" values', function () {
        let result = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
        assert.equal(result, "A-tisket a-tasket A green and yellow basket", 'Should return "A-tisket a-tasket A green and yellow basket"');
    });
});

describe('truncateString', function () {
    it('Tests for truncate string "n" values', function () {
        let result = truncateString("Absolutely Longer", 2);
        assert.equal(result, "Ab...", 'Should return "Ab..."');
    });
});


describe('truncateString', function () {
    it('Tests for truncate string "n" values', function () {
        let result = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
        assert.equal(result, "A-tisket a-tasket A green and yellow basket", 'Should return "A-tisket a-tasket A green and yellow basket"');
    });
});

describe('truncateString', function () {
    it('Tests for truncate string "n" values', function () {
        let result = truncateString("A-", 1);
        assert.equal(result, "A...", 'Should return "A..."');
    });
});

describe('truncateString', function () {
    it('Tests for truncate string "n" values', function () {
        let result = truncateString("A-tisket a-tasket A green and yellow basket", 11);
        assert.equal(result, "A-tisket...", 'Should return "A-tisket...');
    });
});

