# Uppgift: The TypeScript Adventure

**Scenario:**
Vi ska koda logiken till ett textbaserat äventyrsspel. Din hjälte ska vandra genom en mörk skog, samla utrustning, möta fiender och förhoppningsvis överleva till slutet.

**Mål:**
Att knyta ihop hela veckan genom att använda **variabler**, **arrayer**, **loopar** och **villkorsstyrd logik** i ett och samma program.

---

_OBS!:_
Detta spel kommer tyvärr vara statiskt, samma utgång varje gång beroende på era variabel värden. Förhoppningsvist så är temat lite roligt för veckans sammanfattning

---

## Instruktioner

### Steg 1: Skapa Hjälten (Variabler & Typer)

Vi behöver en karaktär innan vi kan börja äventyret.

- [x] Skriv en kommentar: `// Steg 1: Hjälten`.
- [x] Deklarera följande variabler med rätt datatyper:
  - `heroName` (string): Sätt ett valfritt hjältenamn.
  - `hp` (number): Sätt till `100`. (Detta är din hälsa).
  - `isAlive` (boolean): Sätt till `true`.
- [x] **Start:** Logga ett välkomstmeddelande: `"Välkommen [heroName]! Du börjar med [hp] HP."`

### Steg 2: Ryggsäcken (Array-metoder)

Ingen hjälte går hemifrån utan utrustning.

- [x] Skriv en kommentar: `// Steg 2: Inventory`.
- [x] Skapa en tom array som heter `inventory` (datatyp: `string[]`).
- [x] **Loota:** Du hittar en kista! Lägg till strängarna `"Svärd"` och `"Sköld"` i din array med `.push()`.
- [x] **Olycka:** Du snubblar och tappar det sista föremålet du plockade upp. Använd `.pop()` för att ta bort det sista föremålet ur listan.
- [x] **Kolla läget:** Logga din ryggsäck: `"Din ryggsäck innehåller: [inventory]"`.

### Steg 3: Fienderna (Loopar)

Nu börjar vandringen. Skogen är full av monster.

- [x] Skriv en kommentar: `// Steg 3: Äventyret`.
- [x] Skapa en array som heter `enemies` som innehåller tre strängar: `"Slempropp"`, `"Varg"`, `"Drake"`.
- [x] Skapa en **`for...of`**-loop som går igenom varje `enemy` i listan `enemies`.
  - _OBS: All kod i Steg 4 ska skrivas INUTI denna loop._

### Steg 4: Stridssystemet (Villkor & Logik)

Nu ska vi avgöra vad som händer när du möter varje fiende. **(Skrivs inuti loopen)**.

- [x] Logga först: `"Du möter en [enemy]!"`.
- [x] Använd `if / else if / else` för att hantera striderna:
  - **Om fienden är "Slempropp":**
    - Den är svag. Du förlorar inget liv.
    - Logga: `"Du besegrade Slemproppen enkelt!"`.
    - Lägg till `"Guldmynt"` i din `inventory`.
  - **Om fienden är "Varg":**
    - Den är tuff. Minska din `hp` med `20` (använd `-=`).
    - Logga: `"Vargen bet dig! Du har [hp] HP kvar."`.
  - **Om fienden är "Drake":**
    - Boss-fight! Här krävs logik.
    - Skriv ett villkor som kollar om du har minst `50` HP kvar **OCH** (`&&`) om du är vid liv (`isAlive`).
    - **Om JA:** Logga `"Du besegrade draken och vann spelet!"`. (Bonus: Sätt `hp` till 100 som belöning).
    - **Om NEJ:** Sätt `isAlive` till `false`. Logga `"Draken sprutade eld. Game Over."`.

### Steg 5: Efterspelet (Status)

Loopen är slut. Hur gick det?

- [x] Skriv en kommentar: `// Steg 5: Resultat`.
- [x] Skriv en `if`-sats **utanför** loopen som kollar statusen:
  - Om `isAlive` är `true`: Logga `"Grattis [heroName], du överlevde äventyret!"`.
  - Om `isAlive` är `false`: Logga `"Tyvärr [heroName], du dog i skogen..."`.
- [x] Logga slutligen din `inventory` för att se vad du fick med dig hem.

---

### Extra Utmaning (Bonus)

_Är du klar tidigt? Försök lösa detta:_

1. Ändra koden i början så att du _startar_ med `"Svärd"` i ryggsäcken (lägg till det direkt i arrayen när du skapar den).
2. I striden mot **Draken**: Lägg till ett villkor som kollar om din `inventory` innehåller `"Svärd"`.
3. Om du har svärdet gör du mer skada (eller vinner automatiskt). Om du saknar svärdet förlorar du!

---
