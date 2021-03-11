const flip = (n, pivot = 6, offset) => {
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

// 1. Map the row into a flipped row with the flip function
// 2. Populate the furthermost left column with the flipped row, starting at top
// 3. To fill second note in second row, take difference between first number in
//    first row and second number in the first row and add this difference to the
//    first number in the second row. Keep applying this process to fill out second row
// 4. For rows 3-12, apply same process in second row
export const populateMatrix = (primeRow) => {
  const matrix = [];
  const flippedRow = primeRow.map((num) => flip(num, 6, primeRow[0]));
  for (let row = 0; row < 12; row++) {
    const myRow = [];
    for (let col = 0; col < 12; col++) {
      if (row === 0) {
        myRow.push(primeRow[col]);
      } else if (col === 0) {
        myRow.push(flippedRow[row]);
      } else {
        myRow.push(null);
      }
    }
    matrix.push(myRow)
  }
  return matrix;
};
