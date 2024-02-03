"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(9, 8));
console.log(add(9, 8, 1));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 3));
console.log(sub(2, 3, 11));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(1, 2));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, num) => acc + num, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatNum = getItems([4, 5, 6, 3, , 5, 7, 7]);
let concatString = getItems(["dadasd", "dasdasads"]);
//# sourceMappingURL=functions.js.map