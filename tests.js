const subsetsWithDup = require('./solution');
const assert = require('assert');

describe('Tests', function () {
  it('Test Case 1: Empty Array', function () {
    const input = [];
    const expectedOutput = [[]];
    const actualOutput = subsetsWithDup(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });

  it('Test Case 2: Single Element Array', function () {
    const input = [0];
    const expectedOutput = [[], [0]];
    const actualOutput = subsetsWithDup(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });

  it('Test Case 3: Array with Duplicates', function () {
    const input = [1, 2, 2];
    const expectedOutput = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
    const actualOutput = subsetsWithDup(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });

  it('Test Case 4: Array with Negative Numbers', function () {
    const input = [-1, 2, -1];
    const expectedOutput = [ [], [ -1 ], [ -1, -1 ], [ -1, -1, 2 ], [ -1, 2 ], [ 2 ] ];
    const actualOutput = subsetsWithDup(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });

  it('Test Case 5: Array with All Elements Same', function () {
    const input = [5, 5, 5];
    const expectedOutput = [[], [5], [5, 5], [5, 5, 5]];
    const actualOutput = subsetsWithDup(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });

  it('Test Case 6: Array with Unique Elements', function () {
    const input = [1, 2, 3];
    const expectedOutput = [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]];
    const actualOutput = subsetsWithDup(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });
});
