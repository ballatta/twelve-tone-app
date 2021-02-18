const flip = (n, pivot = 6) => {
  // 1. find difference from pivot value
  let dif = n - pivot;
  // 2. floor difference to nearest int
  dif = Math.floor(dif);
  // 3. double difference
  dif = dif * 2;
  // 4. unadjusted target = subtract difference from original
  let rawTarget = n - dif;
  // 5. final target = Math.abs(unadjusted target)
  let target = Math.abs(rawTarget);
  if (target >= 12) {
    return target - 12;
  }
  return target;
};

export const inversion = (row) => {
  /**
   * Given a row, return its inversion transormation.
   */
  let out = [];
  for (let i = 0; i < row.length; i++) {
    out.push(flip(row[i]));
  }
  return out;
};

export const retrograde = (row) => {
  /**
   * Given a row, return its retrograde transormation.
   */
  return row.slice().reverse();
};

export const retrogradeInversion = (row) => {
  /**
   * Given a row, return its retrograde inversion transormation.
   */
  return inversion(retrograde(row));
};
