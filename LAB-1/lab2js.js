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

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort(); // sort, sorts the array alphabetically
favMovies.pop(); // removes the last index
favMovies.push("Guardians of the Galaxy");
favMovies.reverse(); // reverses index
favMovies.shift(); // removes first element
favMovies.unshift("aa"); // will add to 'aa' to index 0;
const index = favMovies.indexOf("Django Unchained");
favMovies.splice(index, 1, "Avatar"); // yes it altered
const mid = Math.ceil(favMovies.length / 2);
const half = favMovies.slice(mid);
console.log(half); // original array hasn't changed.
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious")); // -1 , means false
// const prevents reassignment, not modification.
//
//

////////////////////////////////
// Where is Waldo

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
whereIsWaldo.slice(1, 1);
console.log(whereIsWaldo);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[3][1][1]);

////////////////////////////////

////////////////////////////////
//  Excited Kitten

////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
