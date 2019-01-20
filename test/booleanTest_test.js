/**
 * Created by Andre on 9/02/2018.
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and false.
 *
 */

let assert = require("assert");
let booWho = require('../src/booleanTest.js');

describe('booWho', function () {
  it('booWho', function () {
    let result = booWho(true)
    assert.deepEqual(result, true,
      'value is classified as a boolean primitive');
  });
});

describe('booWho', function () {
  it('booWho', function () {
    let result = booWho(false)
    assert.deepEqual(result, true,
      'value is classified as a boolean primitive');
  });
});

describe('booWho', function () {
  it('booWho', function () {
    let result = booWho(NaN)
    assert.deepEqual(result, false,
      'value is classified as a boolean primitive');
  });
});