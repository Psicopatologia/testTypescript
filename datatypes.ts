// string
let lname: string;
lname = "Orozco";
let newName = lname.toUpperCase();
console.log(newName);

// number
let age: number;
age = 25
let dob = "25"
let result = parseInt(dob)

//boolean
let isValid: boolean = false;
console.log(isValid);

//Array
let emptyList: string[];
emptyList = ["dasdasd", "dasdasda", "dasdwqwvv"]
let numberList: Array<number>;
numberList = [4, 6, 7, 3, 1, 2]
let results = numberList.filter(num => num > 2)
let num = numberList.find(num => num === 2)
let sum = numberList.reduce((acc, num) => acc + num)
console.log(results);
console.log(num);
console.log(sum);

// Enum
const enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;

// tuples
let swapNumbs: [firstNumber: number, secondNumber: number];
function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1]
}
swapNumbs = swapNumbers(10, 20)
swapNumbs[1];

// any
let department: any;
department = 2
department = "dadasd"