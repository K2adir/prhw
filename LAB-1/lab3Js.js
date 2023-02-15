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
    console.log(this.name);
  }
  getAge() {
    console.log(this.age);
  }
  getWeight() {
    console.log(this.weight);
  }

  getHeight() {
    console.log(this.height);
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
