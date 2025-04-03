let riskLevels = [99, 135, 76, 200, 150, 89];

const hexValues = riskLevels.map((level) => level.toString(16));
console.log("Hex values:", hexValues);

const highRisks = riskLevels.filter((level) => level > 100);
console.log("Filtered high risks:", highRisks);

const totalRisk = riskLevels.reduce((sum, level) => sum + level, 0);
console.log("Total risk level:", totalRisk);

const firstAbove150 = riskLevels.find((level) => level > 150);
console.log("First risk above 150:", firstAbove150);

const cleanedData = riskLevels.filter((level) => level >= 80);
console.log("Cleaned data (after removing <80):", cleanedData);
