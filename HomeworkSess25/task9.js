const data = [3, 7, 15, 22];

const binaryValues = data.map((num) => num.toString(2));
console.log("Binary conversion:", binaryValues);

const highestValue = data.reduce((max, num) => Math.max(max, num), 0);
console.log("Highest value:", highestValue);
