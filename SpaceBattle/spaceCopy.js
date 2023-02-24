class SpaceShip {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
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

function playGame(playerShip, alienShips) {
  function logAttackResult(attacker, defender, hit, damage) {
    const attackerName = attacker instanceof SpaceShip ? "🚀" : "👾";
    const defenderName = defender instanceof SpaceShip ? "🚀" : "👾";
    const hitText = hit ? "hit" : "missed";
    console.log(`${attackerName} ${hitText} ${defenderName} damage: ${damage}`);
  }

  function logDestroyed(defender) {
    const defenderName = defender instanceof SpaceShip ? "🚀" : "👾";
    console.log(`${defenderName} destroyed!`);
  }

  function attack(attacker, defender) {
    const attackerName = attacker instanceof SpaceShip ? "🚀" : "👾";
    const hitChance = Math.random() < attacker.accuracy;
    const damage = attacker.firepower;

    if (attacker instanceof AlienShip || attacker instanceof SpaceShip) {
      if (hitChance) {
        logAttackResult(attacker, defender, true, damage);
        defender.getHit(damage);

        if (defender.hull > 0) {
          if (attacker instanceof AlienShip) {
            attacker.getHit(defender.firepower);

            if (attacker.hull > 0) {
              logAttackResult(defender, attacker, true, defender.firepower);
              console.log(`${attackerName} HP: ${playerShip.hull}`);
              attack(defender, attacker);
            } else {
              logDestroyed(attacker);
            }
          } else {
            console.log(`${attackerName} HP: ${playerShip.hull}`);
            attack(defender, attacker);
          }
        } else {
          logDestroyed(defender);
          const nextShip = confirm(`Attack the next 👾?`);

          if (nextShip && alienShips.length > 0) {
            attack(attacker, alienShips.shift());
          } else {
            console.log(`All 👾 bamboozed`);
          }
        }
      } else {
        logAttackResult(attacker, defender, false, defender.firepower);
        attacker.getHit(defender.firepower);

        if (attacker.hull > 0) {
          console.log(`${attackerName} HP: ${playerShip.hull}`);
          attack(defender, attacker);
        } else {
          logDestroyed(attacker);
        }
      }
    }
  }


  attack(playerShip, alienShips.shift());
}

const playerShip = new SpaceShip();
const alienShips = [];

for (let i = 0; i < 6; i++) {
  alienShips.push(new AlienShip());
}

playGame(playerShip, alienShips);
