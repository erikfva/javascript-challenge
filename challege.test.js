const minCost = require("./challenge");
describe("challenge", () => {
  test.each([
    [null, null, null],
    [0, [], []],
    [Math.pow(10, 5) + 1, [], []],
  ])(
    "Check tower count constraint N:%p, H:%p, M:%p",
    (towerCount, towerHeight, increaseCost) => {
      try {
        minCost(towerCount, towerHeight, increaseCost);
        expect(1).toBe(0);
      } catch (error) {
        expect(
          error && !error.matcherResult && error.includes("Invalid tower count")
        ).toBe(true);
      }
    }
  );

  test.each([[3, [1, 0, 2], [4, 1, 5]]])(
    "Check tower height constraint N:%p, H:%p, M:%p",
    (towerCount, towerHeight, increaseCost) => {
      try {
        minCost(towerCount, towerHeight, increaseCost);
        expect(1).toBe(0);
      } catch (error) {
        expect(
          error &&
            !error.matcherResult &&
            error.includes("Invalid tower height")
        ).toBe(true);
      }
    }
  );

  test.each([
    [3, [1, 2, 2], [4, 3, Math.pow(10, 9) + 1]],
    [3, [1, 2, 2], [4, 0, Math.pow(10, 10)]],
  ])(
    "Check increase cost constraint N:%p, H:%p, M:%p",
    (towerCount, towerHeight, increaseCost) => {
      try {
        minCost(towerCount, towerHeight, increaseCost);
        expect(1).toBe(0);
      } catch (error) {
        expect(
          error &&
            !error.matcherResult &&
            error.includes("Invalid increase cost")
        ).toBe(true);
      }
    }
  );

  test.each([
    [3, [2, 2, 3], [4, 1, 5], 2],
    [4, [1, 3, 2, 1000000000], [7, 3, 6, 2], 0],
    [3, [2, 2, 2], [3, 10, 6], 9],
    [4, [2, 2, 3, 3], [4, 1, 5, 7], 7],
  ])(
    "Minimal cost N:%p, H:%p, M:%p, Expected output:%p",
    (towerCount, towerHeight, increaseCost, expectedResult) => {
      const result = minCost(towerCount, towerHeight, increaseCost);
      expect(result).toBe(expectedResult);
    }
  );
});
