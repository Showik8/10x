function calculateBounty(currentBounty, increase) {
  return currentBounty + increase;
}

const newBounty = calculateBounty(1_500_000_000, 500_000_000);
console.log(`Luffy's new bounty is: ${newBounty} berries!`);
