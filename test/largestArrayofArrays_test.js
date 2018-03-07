/**
 * Created by Andre on 3/05/2018.
 */

let assert = require("assert");
let largestArrayofArrays = require('../src/largestArrayofArrays.js');

describe('largestArrayofArrays', function () {
    it('Largest number from each provided sub-array', function () {
        let result = largestArrayofArrays([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

        assert.deepEqual(result, [27,5,39,1001],
            'Largest number from each provided sub-array');
    });
});

describe('largestArrayofArrays', function () {
    it('Largest number from each provided sub-array', function () {
        let result = largestArrayofArrays([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);

        assert.deepEqual(result, [9, 35, 97, 1000000],
            'Largest number from each provided sub-array');
    });
});
