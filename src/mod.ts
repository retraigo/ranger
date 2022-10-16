/** Generate a range of numbers. */
export function range(min: number, max: number, step: number): number[] {
  if (!min && min !== 0) {
    throw new TypeError("Missing minimum limit parameter.");
  }
  const res: number[] = [];
  let current = min;
  while (current < max) {
    current += step;
    res.push(current);
  }
  return res;
}

/** Get n evenly distributed numbers in a range. */
export function uniformRange(n: number, min = 0, max = 1): number[] {
  const res = new Array(n);
  let i = 0;
  const step = (max - min) / (n - 1);
  while (i < n) {
    res[i] = min + i * step;
    i += 1;
  }
  return res;
}
