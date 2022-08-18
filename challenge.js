function minCost(towerCount, towerHeight, increaseCost) {
  if (!towerCount || towerCount < 1 || towerCount > Math.pow(10, 5))
    throw "Invalid tower count";

  const tHeight = [...towerHeight];

  const minCostTotal = tHeight.reduce(
    (totalCost, currentValue, currentIndex) => {
      if (towerHeight[currentIndex] < 1) throw "Invalid tower height";

      if (increaseCost[currentIndex] > Math.pow(10, 9))
        throw "Invalid increase cost";

      if (currentIndex + 1 === towerCount) return totalCost;

      if (currentValue === tHeight[currentIndex + 1]) {
        const minIndex =
          increaseCost[currentIndex] <= increaseCost[currentIndex + 1]
            ? currentIndex
            : currentIndex + 1;
        tHeight[minIndex] = tHeight[minIndex] + 1;
        return totalCost + increaseCost[minIndex];
      }

      return totalCost;
    },
    0
  );

  return minCostTotal;
}

module.exports = minCost;
