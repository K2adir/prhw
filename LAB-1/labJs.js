// I. Variables & Data Types

// A. Q + A

// like this
let lkj = 1;
// this
lkj = 2;
// this
lkj = lkjdsfdsf;

// declare --> let a; const a;  var a;
// assign --> let a =
// define --> let a = 1

///////
// pseudo is used to understand the problem better. It's form of writing the required code in human language and converting it to computer code. Starting from human language and then converting to code let's the developer follow a path that makes sense.

// depending on the experience of the coder and the difficulty level of the problem these numbers can vary. as a general rule 50% thinking and 50% coding is ideal.

////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////

// B. Strings

let firstVariable = "Hello World";
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = "X";
console.log(firstVariable); // 1

let yourName = "Kadir Kirisci";
let hello = `Hello, my name is ${yourName}`;
console.log(hello);

////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
// C. Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kevin";

// console.log(a < b);
// console.log(c > d);
// console.log("Name" === "Name");
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true !== false);
// console.log((false === false && false === false) || false !== true);
// console.log(false === false);
// console.log(e === "Kevin");
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== "48");

////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////

// D. The Farm

let animal = "cow";
if (animal === "cow") console.log("moo");

animal = "lying cow";
if (animal !== "cow") console.log("you are not a cow");

////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////

// E. Driver's Ed

let age = 16;
if (age > 15) console.log("here are the keys");
else console.log("you are too young");

////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////

// II. Loops
// A. The Basics
// for (let i = 0; i < 11; i++) console.log(i);
// //
// for (let i = 10; i < 401; i++) console.log(i);
// //
// for (let i = 12; i <= 4000; i += 3) {
//   console.log(i);
// }

////////////////////=========================/////////////////
////////////////////=========================/////////////////

// B. Get even

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " <-- is an even number");
  } else {
    console.log(i);
  }
}

// C. Give me Five
for (let i = 0; i < 101; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`found ${i}, High Five! Three is a crowd`);
  } else if (i % 5 === 0) console.log(`found ${i}, High Five!`);
  else if (i % 3 === 0) console.log(`found ${i}, Three is a crowd`);
}

// D. Savings account

// let bank_account = 0;
// for (let i = 1; i <= 10; i++) {
//   bank_account += i;
// }
// console.log("Bank account: $" + bank_account);
// let doubled_bank_account = 0;
// for (let i = 1; i <= 100; i++) {
//   doubled_bank_account += i * 2;
// }
// console.log("Doubled bank account: $" + doubled_bank_account);

////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////

// III. Arrays & Control Flow
// A. Talk about it:

// a - elements
// b - order depends on how the user/system indexed, order can be changed with sort()
// c - most api's come in array form. music data base is an huge array with artist info.

// B. Easy Does It

const quote = ["quote0", "quote1", "quote2"];

// C. Accessing elements

const randomThings = [1, 10, "Hello", true];
randomThings[0];
randomThings[2] = "world";
console.log(randomThings);

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass = [2];
ourClass[4] = "octocat";
ourClass.push("Cloud city");

// E. Mix It Up

const myArray = [5, 10, 500, 20];
myArray.push("Aegon", "aaa");
myArray.shift();
myArray.unshift("bob marley");
myArray.pop();
myArray.reverse();
// mutate means to change values or index of the array. reverse changes index and reverse does not return anything.

// F. Biggie Smalls

let num = 20; //
if (num < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// G. Monkey in the Middle

let numArr = 7; //
if (numArr < 5) {
  console.log("little number");
} else if (numArr > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// H. What's in Your Closet?

// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// kristynsCloset.push("raybans");

// kristynsCloset[5] = "stained knit hat";
// const shirt = thomsCloset[0][0];
// const pants = thomsCloset[1][1];
// const accessory = thomsCloset[2][2];
// console.log(
//   "Thom is looking fierce in a " +
//     shirt +
//     ", " +
//     pants +
//     " and " +
//     accessory +
//     "!"
// );
// thomsCloset[1][2] = "Footie Pajamas";

////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////
////////////////////=========================/////////////////

// IV. Functions
// B.

const cool = (name) => {
  return console.log(`${name} is cool`);
};

// C.

const cubic = (num) => {
  const vol = num ** 3;
  console.log(`vol: ${num} is ${vol}.`);
};

// D.

const vowel = (letter) => {
  const vowels = "AaEeUuIiOo";
  return vowels.includes(letter);
};

// E.

const getTwoLengths = (str1, str2) => {
  return [str1.length, str2.length];
};

// F.
const getMultipleLengths = (arr) => {
  var len = [];

  for (var i = 0; i < arr.length; i++) {
    len.push(arr[i].length);
  }

  return len;
};

// G.

const maxOfThree = (num1, num2, num3) => {
  let max = num1;

  if (num2 > max) {
    max = num2;
  }

  if (num3 > max) {
    max = num3;
  }

  return max;
};

// H.

const printLongestWord = (char) => {
  let longest = "";
  char.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
};

//_____

// V. Objects
// A.

const user = {
  name: "joe",
  email: "joe@joe.joe",
  age: 20,
  purchased: [],
  friend: {
    name: "Alice",
    age: 30,
    location: "New York",
    purchased: [],
  },
};
// B.
user.email = "joe@joe.com";
user.age++;

// C.
user.location = "wonderland";
// D.
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased);

// E.
console.log(user.friend.name);

console.log(user.friend.location);

user.friend.age = 55;

user.friend.purchased.push("The One Ring");

user.friend.purchased.push("A latte");

console.log(user.friend.purchased[1]);

// F.
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}
// G.
function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
}
function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}
oldAndLoud(user);

//______
