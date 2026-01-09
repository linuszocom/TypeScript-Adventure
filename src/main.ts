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

// Steg 4: Fiende
// Steg 5: Resultat
// Steg 6: Extra
