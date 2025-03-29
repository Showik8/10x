let healthPotionPrice = 15;
let manaPotionPrice = 20;

let healthPotionsBought = 1;
let manaPotionsBought = 1;

let totalCost =
  healthPotionPrice * healthPotionsBought + manaPotionPrice * manaPotionsBought;
console.log(totalCost);

if (totalCost > 50) {
  totalCost *= 0.9;
  console.log("Total cost is above 50 gold");
}

console.log("Total cost after any discounts:", totalCost);
