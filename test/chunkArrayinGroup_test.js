/**
 * Created by Andre on 3/11/2018.
 * Write a function that splits an array (first argument)
 * into groups the length of size (second argument) and returns them as a two-dimensional array.
 */

let assert = require("assert");
let chunkArrayInGroup = require('../src/chunkArrayInGroup.js');

describe('chunkArrayInGroup', function () {
    it('Chunk Array', function () {
        let result = chunkArrayInGroup([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

        assert.deepEqual(result, [[0, 1], [2, 3], [4, 5], [6, 7], [8]],
            'Chunk Array arg into a two-dimensional array.');
    });
});

describe('chunkArrayInGroup', function () {
    it('Chunk Array', function () {
        let result = chunkArrayInGroup([0, 1, 2, 3, 4, 5, 6], 3);

        assert.deepEqual(result, [[0, 1, 2], [3, 4, 5], [6]],
            'Chunk Array arg into a two-dimensional array.');
    });
});

describe('chunkArrayInGroup', function () {
    it('Chunk Array', function () {
        let result = chunkArrayInGroup([0, 1, 2, 3, 4, 5], 4);

        assert.deepEqual(result, [[0, 1, 2, 3], [4, 5]],
            'Chunk Array arg into a two-dimensional array.');
    });
});


describe('chunkArrayInGroup', function () {
    it('Chunk Array', function () {
        let result = chunkArrayInGroup(["a", "b", "c", "d"], 2);

        assert.deepEqual(result, [["a", "b"], ["c", "d"]],
            'Chunk Array arg into a two-dimensional array.');
    });
});

