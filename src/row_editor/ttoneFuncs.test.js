import { inversion, retrograde, retrogradeInversion } from "./ttoneFuncs";

const SAMPLE_ROW = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
});
