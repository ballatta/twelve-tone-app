import { inversion, retrograde, retrogradeInversion, getRow, populateMatrix } from "./ttoneFuncs";

const SAMPLE_ROW = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const SAMPLE_ROW2 = [0, 2, 7, 9, 3, 6, 5, 1, 11, 10, 8, 4];

const expectForInversion = [0, 10, 5, 3, 9, 6, 7, 11, 1, 2, 4, 8]

const EXPECT_FOR_INVERSION = [0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const EXPECT_FOR_RETROGRADE = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // expectation is wrong
// prettier-ignore
const EXPECT_FOR_RETROGRADE_INVERSION = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0];

describe("twelve tone functions", () => {
  it("can perform inversion", () => {
    expect(inversion([...SAMPLE_ROW])).toStrictEqual(EXPECT_FOR_INVERSION);
  });
  it("can perform retrograde", () => {
    expect(retrograde([...SAMPLE_ROW])).toStrictEqual(EXPECT_FOR_RETROGRADE);
  });
  it("can perform retrograde inversion", () => {
    expect(retrogradeInversion([...SAMPLE_ROW])).toStrictEqual(
      EXPECT_FOR_RETROGRADE_INVERSION
    );
  });
  it("can generate an arbitrary row", () => {
    expect(getRow(SAMPLE_ROW, 1)).toStrictEqual([11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("can perform inversion on second test-case", () => {
    expect(inversion([...SAMPLE_ROW2])).toStrictEqual(expectForInversion);
  });
  it('can properly populate left column', () => {
    const populatedMatrix = populateMatrix(SAMPLE_ROW2)
    for (let i = 0; i < 12; i++) {
      expect(populatedMatrix[i][0]).toStrictEqual(expectForInversion[i]);
  }})
});
