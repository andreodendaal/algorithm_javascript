/**
 * Created by Andre on 09/01/2018.
 * Create a function that looks through an array (first argument)
 * and returns the first element in the array that passes a truth test (second argument).
 * If no element passes the test, return undefined.
 */

let assert = require("assert");
let findElement = require('../src/findElement.js');

describe('findElement', function () {
  it('Find Element', function () {
    let result = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

    assert.deepEqual(result, 8,
      'Find element matching function parameter requirement');
  });
});

describe('findElement', function () {
  it('Find Element', function () {
    let result = findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });

    assert.deepEqual(result, undefined,
      'Find element matching function parameter requirement');
  });
});

