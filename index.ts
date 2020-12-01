let students = [
  { name: "Shreya", age: 22 },
  { name: "Shreya B", age: 22 },
  { name: "Grishma", age: 22 },
  { name: "Shubha", age: 22 },
  { name: "Pooja", age: 22 },
];
/** This is a description of the student interface */
interface Student {
  name: string;
  age: number;
}
function sortByName(arr: Student[]) {
  const copiedArr = [...arr];
  copiedArr.sort((first, second) => {
    return first.name.localeCompare(second.name);
  });
  return copiedArr;
}
const sorted = sortByName(students);
// -------------------------------------------------------
let toBeGreeted = "world";
function greet(nameIn: string) {
  return `hello ${nameIn.toUpperCase()}`;
}
greet(toBeGreeted);
// -------------------------------------------------------
interface User {
  name: string;
  age: number;
  salar? : number;
}

let user: User = {
  name: "john",
  age: 21,
};

let aPhdUser = {
    name : "Foo", 
    age: 40,
    salary: 12000
}

interface Employee {
  name: string;
  age: number;
  salary: number;
}

let tse: Employee = {
  name: "Foo",
  age: 22,
  salary: 3000,
};
// -------------------------------------------------------
// interface Label{
//     label: string
// }
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

//   optional properties
interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): { color: string; area: number } {
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

//   excess property
interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare1(config: SquareConfig): { color: string; area: number } {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }
  
  let mySquare1 = createSquare({ color: "red", width: 100 });

  interface SquareConfigNew {
    color?: string;
    width?: number;
    [propName: string]: any;
  }

  function doSomething(config:SquareConfigNew) {
      let color = config.color;
      let width = config.width;
      let someNotPresent = config.notPresent;
  }

  let someOtherConfig = {height: 100, radius: 30}
  doSomething(someOtherConfig)

//   if u dont know the property priorly , u can do this
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
//   }

interface StudentInterface {
    name: string;
    age: number;
    [propName: string]: any;
}
let course = "maths"
let student = {
    name: "John",
    age: 30,
    [course]: 40
}

// function types
interface SearchFunc {
    (source: string, subString: string): boolean;
  }
 

mySearch = function (searchFunc: SearchFunc) {
  return searchFunc("Wikipedia", "pooja") 
};

interface StringArray {
    [index1: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

myArray["1"] = myArray[1]

let myStr: string = myArray[0];
