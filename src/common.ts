export const DEFAULT_RADIUS = 6371e3;

export function equals(position1: GeoJSON.Position, position2: GeoJSON.Position): boolean {
  if (Math.abs(position1[0] - position2[0]) > Number.EPSILON) return false;
  if (Math.abs(position1[1] - position2[1]) > Number.EPSILON) return false;

  return true;
}

export function toRadians(value: number): number {
  return value / 180 * Math.PI;
}

export function toDegrees(value: number): number {
  return value / Math.PI * 180;
}
