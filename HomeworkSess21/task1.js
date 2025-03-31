let gandalfMagicPower = 100;
let dumbledoreMagicPower = 120;

gandalfMagicPower += 20;
dumbledoreMagicPower -= 10;

console.log("Gandalf's new magic power:", gandalfMagicPower);
console.log("Dumbledore's new magic power:", dumbledoreMagicPower);

if (gandalfMagicPower > dumbledoreMagicPower) {
  console.log("Gandalf the Grey is stronger!");
} else if (gandalfMagicPower < dumbledoreMagicPower) {
  console.log("Dumbledore is stronger!");
} else {
  console.log("It's a tie! Both are equally powerful!");
}
