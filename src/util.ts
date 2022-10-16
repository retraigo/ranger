/** Get random number from range. */
export default function rng(
  min: number,
  max: number,
  allowDecimals = false,
): number {
  const rng = min + (Math.random() * (max - min));
  return allowDecimals ? rng : Math.round(rng);
}
