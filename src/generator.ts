/** Generate a range of numbers. */
export function* range(min: number, max: number, step: number) {
  if (!min && min !== 0) {
    throw new TypeError("Missing minimum limit parameter.");
  }
  let current = min;
  while (current < max) {
    current += step;
    yield current;
  }
}

/** Get n evenly distributed numbers in a range. */
export function* uniformRange(n: number, min = 0, max = 1) {
  let i = 0;
  const step = (max - min) / (n - 1);
  while (i < n) {
    yield min + i * step;
    i += 1;
  }
}
