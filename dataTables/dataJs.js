// typeof(15)
// // Prediction: number
// // Actual: num

// typeof(5.5)
// // Prediction: number
// // Actual: num

// typeof(NaN)
// // Prediction:  number
// // Actual: num

// typeof(“hello”)
// // Prediction: string
// // Actual: string

// typeof(true)
// // Prediction: boolean
// // Actual: boolean

// typeof(1 != 2)
// // Prediction: Boolean
// // Actual: bolean

// “Ostentatiou” + “s”
// // Prediction: “Ostentatious”
// // Actual: string

// “Facetious” - “s”
// // Prediction: NaN
// // Actual: nan

// “1” + “5”
// // Prediction: "15" string
// // Actual: string

// “1” - “5”
// // Prediction: -4 - number
// // Actual: number

// “ivory” + “5”
// // Prediction: ivory5 - string
// // Actual: string

// 99 - “cheese rolling”
// // Prediction: NaN
// // Actual: nan

///// lab 2 /////

// let mySingleString = "my string";
// console.log("A string can be written inside of single quotes.");

// let myDoubleString = "my double";
// console.log("It can also be written inside of double quotes.");

// let myBackString = `back`;
// console.log(`Backticks work, too.`);

// // ADD CODE BELOW

// // Uncomment the line below to check your work!
// console.log(mySingleString);
// console.log(myDoubleString);
// console.log(myBackString);

////////////////////////////////////
// -------------Lab 3 --------------

// let a = 1;
// let b = 2;
// let c = a + b;
// let d = 4;
// let e = 5;
// let f = 7;
// let p = 8;
// let r = 9;
// let s = 10;

// let sum5 = a + b + c + d + e;

// let sum5Avg = sum5 / 5;

// let sumLast = f + p + r + s;
// let sumLastAvg = sumLast / 5;

// let sumsAvg = (sum5Avg + sumLastAvg) / 2;

// console.log(sumsAvg);
// // 4.9

// ---- lab 4 -----

// let num1 = 32;
// let num2 = 25;
// let num3 = 92;
// let num4 = 64;

// // ADD CODE BELOW HERE
// num1 += 17;
// num2 -= 14;
// num3 *= 11;
// num4 /= 8;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);

///////////////////////////

// lab 5
// 1.
const small = 2;
const large = 5342;
let isSmaller = small < large;

// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
let isLooselyEqual = isLooselyEqual == isStrictlyEqual;

// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
let isTrueNotFalse = isFalse != isTrue;

console.log("Is 2 < 5342?");
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?');
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log("Is true not equal to false?");
console.log(isTrueNotFalse);
