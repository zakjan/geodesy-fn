import test from 'tape';
import { distance, initialBearing, finalBearing, midpoint, destinationPoint } from './spherical.js';

test('spherical', (t) => {
  t.test('@examples', (t) => {
    t.test('distanceTo d', async (t) => {
      const result = distance([0.119, 52.205], [2.351, 48.857]);
      const expected = 404279;

      t.equal(result.toFixed(), expected.toFixed());
    });

    t.test('distanceTo m', async (t) => {
      const result = distance([0.119, 52.205], [2.351, 48.857], 3959);
      const expected = 251.2;

      t.equal(result.toFixed(1), expected.toFixed(1));
    });

    t.test('initialBearingTo', async (t) => {
      const result = initialBearing([0.119, 52.205], [2.351, 48.857]);
      const expected = 156.2;

      t.equal(result.toFixed(1), expected.toFixed(1));
    });

    t.test('finalBearingTo', async (t) => {
      const result = finalBearing([0.119, 52.205], [2.351, 48.857]);
      const expected = 157.9;

      t.equal(result.toFixed(1), expected.toFixed(1));
    });

    t.test('midpointTo', async (t) => {
      const result = midpoint([0.119, 52.205], [2.351, 48.857]);
      const expected = [1.2746, 50.5363];

      t.deepEqual(result.map(x => x.toFixed(4)), expected.map(x => x.toFixed(4)));
    });

    t.test('destinationPoint', async (t) => {
      const result = destinationPoint([-0.00147, 51.47788], 7794, 300.7);
      const expected = [-0.0983, 51.5136];

      t.deepEqual(result.map(x => x.toFixed(4)), expected.map(x => x.toFixed(4)));
    });
  });
});