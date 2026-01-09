// Steg 1: Hjälten
const heroName: string = "Himothy";
let hp: number = 100;
let isAlive: boolean = true;

console.log(`Välkommen ${heroName}! Du börjar md ${hp} HP.`);

// Steg 2: Inventory
const inventory: string[] = [];

console.log("Du hittar en kista med svärd och sköld");
inventory.push("Svärd", "Sköld");
console.log(`Din ryggsäck innehåller: ${inventory}`);

console.log("Du snubblar och tappar det sista föremålet du plockade upp.");
inventory.pop();
console.log(`Din ryggsäck innehåller: ${inventory}`);

// Steg 3: Enemies
console.log("Nu börjar änventyret. Skogen är full av monster.");
const enemies: string[] = ["Slempropp", "Varg", "Drake"];

// Steg 4: Stridssystemet

for (const enemy of enemies) {
  console.log(`Du möter en ${enemy}`);

  if (enemy === "Slempropp") {
    console.log(`Du besegrade ${enemy} enkelt, och den droppar en guldmynt.`);
    inventory.push("Guldmynt");
    console.log(`Din ryggsäck innehåller: ${inventory}`);
  } else if (enemy === "Varg") {
    console.log("Vargen är tuff!");
    hp -= 20;
    console.log(`Vargen bet dig! Du har ${hp} HP kvar.`);
  } else if (enemy === "Drake") {
    if (hp >= 50 && isAlive) {
      console.log(`Du besegrade draken och vann spelet!`);
    } else {
      console.log(`Draken sprutade eld. Game Over!`);
    }
  }
}
// Steg 5: Resultat
// Steg 6: Extra
