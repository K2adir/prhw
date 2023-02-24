class SpaceShip {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }

  getHit(alienHit) {
    this.hull -= alienHit;
    return this.hull;
  }

  attack(alienShip) {
    console.log(`🚀 attack 👾`);
    const hitChance = Math.random();
    if (hitChance < this.accuracy) {
      console.log(`🚀 hit 👾 damage: ${this.firepower}`);
      alienShip.getHit(this.firepower);
      if (alienShip.hull > 0) {
        this.getHit(alienShip.firepower);
        if (this.hull > 0) {
          console.log(`👾 hit 🚀 damage: ${alienShip.firepower} damage!`);
          console.log("🚀 HP: ", playerShip.hull);
          this.attack(alienShip);
        } else {
          console.log(`🚀 destroyed`);
        }
      } else {
        console.log(`🚀 destroyed 👾!`);
        const nextShip = confirm(`Attack the next 👾?`);
        if (nextShip && alienShips.length > 0) {
          this.attack(alienShips.shift());
        } else {
          console.log(`All 👾 bamboozed`);
        }
      }
    } else {
      console.log(`🚀 missed - 👾 hit 🚀 damage: ${alienShip.firepower}`);

      this.getHit(alienShip.firepower);
      console.log("🚀 HP: ", playerShip.hull);
      if (this.hull > 0) {
        this.attack(alienShip);
      } else {
        console.log(`🚀 destroyed!`);
      }
    }
  }
}

class AlienShip {
  constructor(hull, firepower, accuracy) {
    this.hull = hull || Math.floor(Math.random() * 4) + 3;
    this.firepower = firepower || Math.floor(Math.random() * 3) + 2;
    this.accuracy = accuracy || Math.floor(Math.random() * 3) / 10 + 0.6;
  }

  getHit(shipHit) {
    this.hull -= shipHit;
    return this.hull;
  }
}

/// Game play ==================
const playerShip = new SpaceShip();
const alienShips = [];
for (let i = 0; i < 6; i++) {
  alienShips.push(new AlienShip());
}

playerShip.attack(alienShips.shift()); // Start the game with the first alien ship
