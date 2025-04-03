const students = ["Harry", "Hermione", "Ron", "Draco"];
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const sortedStudents = students.map((student) => {
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];
  return `${student} - ${randomHouse}`;
});

console.log(sortedStudents);
