export const DEFAULT_RADIUS = 6371e3;

/**
 * @param {GeoJSON.Position} position1
 * @param {GeoJSON.Position} position2
 * @returns {boolean}
 */
export function equals(position1, position2) {
  if (Math.abs(position1[0] - position2[0]) > Number.EPSILON) return false;
  if (Math.abs(position1[1] - position2[1]) > Number.EPSILON) return false;

  return true;
}

/**
 * @param {number} value
 * @returns {number}
 */
export function toRadians(value) {
  return value / 180 * Math.PI;
}

/**
 * @param {number} value
 * @returns {number}
 */
export function toDegrees(value) {
  return value / Math.PI * 180;
}