import _ from 'lodash'

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

export const getRow = (primeRow, rowNum) => {
  const firstNote = flip(primeRow[rowNum])
  const output = [firstNote]
  primeRow.slice(1).forEach((note, index) => {
    const diff = note - primeRow[index]
    output.push((output[index] + diff) % 12)
  })
  return output
}

/**
 * 1. Map the row into a flipped row with the flip function
 * 2. Populate the furthermost left column with the flipped row, starting at top
 * 3. To fill note n in row n, subtract note n - 1 in first row from note n in first row
 *    add this difference to note n - 1 in row n
 */
export const populateMatrix = (primeRow) => {
  const matrix = [];
  const flippedRow = primeRow.map((num) => flip(num));
  for (let row = 0; row < 12; row++) {
    const myRow = [];
    for (let col = 0; col < 12; col++) {
      if (row === 0) {
        myRow.push(primeRow[col]);
      } else if (col === 0) {
        myRow.push(flippedRow[row]);
      } else {
        myRow.push(matrix[0][col] - matrix[0][col - 1] + myRow[col - 1]);
      }
    }
    matrix.push(myRow);
  }
  return matrix;
};