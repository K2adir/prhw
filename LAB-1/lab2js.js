////////////////////////////////
// Easy Going Write a for loop that will log the numbers 1 through 20.
////////////////////////////////

for (let i = 0; i < 21; i++) {
  console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i < 21; i += 2) {
  console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i < 101; i++) {
  console.log(
    i,
    i % 3 === 0 && i % 5 === 0
      ? "fizzbuzz"
      : i % 3 === 0
      ? "fizz"
      : i % 5 === 0
      ? "buzz"
      : ""
  );
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
plantee[2]++;
wolfy[3] = "gotham city";
dart.push("Hawkins");
wolfy.splice(0, 1, "gameboy");

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

let turtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let turt of turtle) {
  turt = turt.toUpperCase();
  console.log(turt);
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
