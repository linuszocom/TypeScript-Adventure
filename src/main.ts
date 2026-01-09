// Steg 1: Hjälten
const heroName: string = "Himothy";
let hp: number = 10;
let isAlive: boolean = true;

console.log(`Välkommen ${heroName}! Du börjar md ${hp} HP.`);

// Steg 2: Inventory
const inventory: string[] = ["Svärd"];
const inventoryMsg: string = `Din ryggsäck innehåller:`;

let fallen: boolean = false;
let foundLoot: boolean = false;

if (foundLoot) {
  console.log("Du hittar sköld");
  inventory.push("Sköld");
}

console.log(inventoryMsg, inventory.toString());

if (fallen) {
  console.log("Du snubblar och tappar det sista föremålet i ditt inventory.");
  inventory.pop();
}

// Steg 3: Enemies
console.log("Nu börjar änventyret. Skogen är full av monster.");
const enemies: string[] = ["Slempropp", "Varg", "Drake"];

// Steg 4: Stridssystemet

for (const enemy of enemies) {
  console.log(`Du möter en ${enemy}`);

  if (enemy === "Slempropp") {
    console.log(`Du besegrade ${enemy} enkelt, och den droppar en guldmynt.`);
    inventory.push("Guldmynt");
    console.log(inventoryMsg, inventory.toString());
  } else if (enemy === "Varg") {
    console.log("Vargen är tuff!");
    hp -= 20;

    if (hp < 0) {
      hp = 0;
    }

    console.log(`Vargen bet dig! Du har ${hp} HP kvar.`);
  } else if (enemy === "Drake") {
    if (hp >= 50 && isAlive && inventory.includes("Svärd")) {
      console.log(`Du besegrade draken och vann spelet!`);
    } else {
      console.log(`Draken sprutade eld. Game Over!`);
      isAlive = false;
    }
  }
} // for end

// Steg 5: Resultat
if (isAlive) {
  console.log(`Grattis ${heroName}, du överlevde äventyret!`);
} else {
  console.log(`Tyvärr ${heroName}, du dog i skogen...`);
}

if (inventory.length === 0) {
  console.log(inventoryMsg, "inget");
} else {
  console.log(inventoryMsg, inventory.toString());
}
