const arr = [99, 135, 76, 200, 150, 89];

const hexValues = arr.map((num) => num.toString(16).padStart(2, "0"));

const levelAboveHundred = arr.filter((item) => item > 100);

const totalRistLevel = arr.reduce(
  (acc, item) => {
    acc.totalRistLevel += item;
    return acc;
  },
  { totalRistLevel: 0 }
);

const levelAboveHundredFifty = arr.find((item) => item > 150);

const riskLevelBelowEighten = (arrName) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 80) {
      arr.splice(i, 1);
    }
  }

  return arrName;
};
