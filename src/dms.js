/**
 * @param {number} value
 * @returns {number}
 */
export function wrap360(value) {
  return (value + 360) % 360
}