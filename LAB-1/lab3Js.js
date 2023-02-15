class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(
    name,
    age = 0,
    height = 0,
    weight = 0,
    mood = 0,
    hamster = [],
    bankAccount = 0
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamster = hamster;
    this.bankAccount = bankAccount;
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }

  getHeight() {
    return this.height;
  }

  eat() {
    this.mood++;
    this.weight++;
  }

  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }

  buyHamster(hamster) {
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
    this.hamster.push(hamster);
  }
}
const timmy = new Person("Timmy");
const gus = new Hamster("Gus");
gus.owner = "Timmy";
timmy.buyHamster(gus);

for (let i = 0; i < 5; i++) {
  timmy.ageUp();
}

for (let i = 0; i < 5; i++) {
  timmy.eat();
}

for (let i = 0; i < 5; i++) {
  timmy.exercise();
}

for (let i = 0; i < 4; i++) {
  timmy.ageUp();
}
for (let i = 0; i < 6; i++) {
  timmy.ageUp();
}
for (let i = 0; i < 2; i++) {
  timmy.eat();
}
for (let i = 0; i < 2; i++) {
  timmy.exercise();
}
console.log(timmy);
/// timmy and hamster

//// chef and dinner

class Dinner {
  constructor(appe, ent, des) {
    this.appe = appe;
    this.ent = ent;
    this.des = des;
  }
}

class Chef {
  cooking(appe, ent, des) {
    return new Dinner(appe, ent, des);
  }
}

const joe = new Chef();

const dinner1 = chef.cooking("food1", "food2", "food3");
const dinner2 = chef.cooking("food4", "food5", "food6");
const dinner3 = chef.cooking("food6", "food7", "food8");

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);
