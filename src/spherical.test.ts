import assert from 'node:assert';
import { describe, test } from 'node:test';

import { distance, initialBearing, finalBearing, midpoint, destinationPoint } from './spherical.js';

// see https://github.com/chrisveness/geodesy/blob/master/test/latlon-spherical-tests.js
describe('spherical', () => {
  describe('@examples', () => {
    test('distanceTo d', () => {
      const result = distance([0.119, 52.205], [2.351, 48.857]);
      const expected = 404279;

      assert.equal(result.toFixed(), expected.toFixed());
    });

    test('distanceTo m', () => {
      const result = distance([0.119, 52.205], [2.351, 48.857], 3959);
      const expected = 251.2;

      assert.equal(result.toFixed(1), expected.toFixed(1));
    });

    test('initialBearingTo', () => {
      const result = initialBearing([0.119, 52.205], [2.351, 48.857]);
      const expected = 156.2;

      assert.equal(result.toFixed(1), expected.toFixed(1));
    });

    test('finalBearingTo', () => {
      const result = finalBearing([0.119, 52.205], [2.351, 48.857]);
      const expected = 157.9;

      assert.equal(result.toFixed(1), expected.toFixed(1));
    });

    test('midpointTo', () => {
      const result = midpoint([0.119, 52.205], [2.351, 48.857]);
      const expected = [1.2746, 50.5363];

      assert.deepEqual(result.map(x => x.toFixed(4)), expected.map(x => x.toFixed(4)));
    });

    test('destinationPoint', () => {
      const result = destinationPoint([-0.00147, 51.47788], 7794, 300.7);
      const expected = [-0.0983, 51.5136];

      assert.deepEqual(result.map(x => x.toFixed(4)), expected.map(x => x.toFixed(4)));
    });
  });
});
