"use strict";
let students = [
    { name: "Shreya", age: 22 },
    { name: "Shreya B", age: 22 },
    { name: "Grishma", age: 22 },
    { name: "Shubha", age: 22 },
    { name: "Pooja", age: 22 },
];
function sortByName(arr) {
    const copiedArr = [...arr];
    copiedArr.sort((first, second) => {
        return first.name.localeCompare(second.name);
    });
    return copiedArr;
}
const sorted = sortByName(students);
// -------------------------------------------------------
let toBeGreeted = "world";
function greet(nameIn) {
    return `hello ${nameIn.toUpperCase()}`;
}
greet(toBeGreeted);
let user = {
    name: "john",
    age: 21,
};
let aPhdUser = {
    name: "Foo",
    age: 40,
    salary: 12000
};
let tse = {
    name: "Foo",
    age: 22,
    salary: 3000,
};
// -------------------------------------------------------
// interface Label{
//     label: string
// }
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
function createSquare1(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
let mySquare1 = createSquare({ color: "red", width: 100 });
function doSomething(config) {
    let color = config.color;
    let width = config.width;
    let someNotPresent = config.notPresent;
}
let someOtherConfig = { height: 100, radius: 30 };
doSomething(someOtherConfig);
let course = "maths";
let student = {
    name: "John",
    age: 30,
    [course]: 40
};
