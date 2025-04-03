const jedi = ["Luke", "Obi-Wan", "Yoda", "Anakin"];

const yodaFound = jedi.find((name) => name === "Yoda");

if (yodaFound) {
  console.log("Master found!");
} else {
  console.log("Master Yoda is not here.");
}
