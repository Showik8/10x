const characterArr = ['Harry', 'Hermione', 'Ron', 'Draco'];
const familyArr = ["Gryffindor", "Ravenclaw", "Gryffindor", "Slytherin"];

const newArray = characterArr.map((name, indx) => {
    return (`${name} " " ${familyArr[indx]}`)
})

console.log(newArray);
