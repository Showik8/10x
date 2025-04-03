const avengersMissions = [
  { hero: "Iron Man", budget: 5000 },
  { hero: "Hulk", budget: 2000 },
  { hero: "Captain America", budget: 3000 },
];

const totalBudget = avengersMissions.reduce(
  (sum, mission) => sum + mission.budget,
  0
);

console.log(`Total budget: ${totalBudget}`);
