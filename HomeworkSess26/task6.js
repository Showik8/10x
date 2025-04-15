let arr = [];

const addElem = (arrName, item) => { arrName.push(item) };
const delElem = (arrName, item) => { arr.includes(item) ? arrName.pop(item) : "Elem does not exist" };

addElem(arr, "Lion");
addElem(arr, "Tiger");
delElem(arr, "Tiger");

console.log(arr);
