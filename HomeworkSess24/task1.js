
let people = [
  {
    name: "John",
    mass: 92,
    height: 1.95,
  },
  {
    name: "Mark",
    mass: 78,
    height: 1.69,
  },
];

function calculateBMI(name, mass, height) {
  let bmi = mass / (height * height);
  return `${name}'s BMI is ${bmi.toFixed(2)}`;
}

people.forEach(person=> {
  console.log(calculateBMI(person.name, person.mass, person.height));
});

function compareBMI(person1, person2) {
  let bmi1 = calculateBMI(person1.mass, person1.height);
  let bmi2 = calculateBMI(person2.mass, person2.height);

  if (bmi1 > bmi2) {
    return `${person1.name} has a higher BMI (${bmi1}) than ${
      person2.name
    } (${bmi2}).`;
  } else if (bmi1 < bmi2) {
    return `${person2.name} has a higher BMI (${bmi2}) than ${
      person1.name
    } (${bmi1}).`;
  } else {
    return `${person1.name} and ${
      person2.name
    } have the same BMI (${bmi1}).`;
  }
}

console.log(compareBMI(people[0],people[1]))