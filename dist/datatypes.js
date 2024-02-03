"use strict";
// string
let lname;
lname = "Orozco";
let newName = lname.toUpperCase();
console.log(newName);
// number
let age;
age = 25;
let dob = "25";
let result = parseInt(dob);
//boolean
let isValid = false;
console.log(isValid);
//Array
let emptyList;
emptyList = ["dasdasd", "dasdasda", "dasdwqwvv"];
let numberList;
numberList = [4, 6, 7, 3, 1, 2];
let results = numberList.filter(num => num > 2);
let num = numberList.find(num => num === 2);
let sum = numberList.reduce((acc, num) => acc + num);
console.log(results);
console.log(num);
console.log(sum);
let c = 2 /* Color.Blue */;
// tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[1];
// any
let department;
department = 2;
department = "dadasd";
//# sourceMappingURL=datatypes.js.map