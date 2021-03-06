/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */
export function between(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
}

function isValidNumber(num) {
  return num !== null && num !== false && !Number.isNaN(Number(num));
}

export function safeMin(...args) {
  return Math.min(...args.filter(isValidNumber));
}

export function safeMax(...args) {
  return Math.max(...args.filter(isValidNumber));
}
