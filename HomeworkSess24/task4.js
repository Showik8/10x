let tip;

const calculateTips = (x) => {
  if (x < 0) {
    return "The number is negative";
  } else if (x < 50 || x > 300) {
    tip = x * 0.2;
  } else {
    tip = x * 0.15;
  }
  return `The tips are: ${tip} and the total value is: ${x + tip}`;
};

console.log(calculateTips(-5));
console.log(calculateTips(100));
