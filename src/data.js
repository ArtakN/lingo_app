const a11 = [
   { id: 1, word: 'Hund', article: 'der', meaning: 'собака' },
   { id: 2, word: 'Katze', article: 'die', meaning: 'кошка' },
   { id: 3, word: 'Haus', article: 'das', meaning: 'дом' },
   { id: 4, word: 'Buch', article: 'das', meaning: 'книга' },
   { id: 5, word: 'Auto', article: 'das', meaning: 'автомобиль' },
   { id: 6, word: 'Stuhl', article: 'der', meaning: 'стул' },
   { id: 7, word: 'Tür', article: 'die', meaning: 'дверь' },
   { id: 8, word: 'Fenster', article: 'das', meaning: 'окно' },
   { id: 9, word: 'Tisch', article: 'der', meaning: 'стол' },
   { id: 10, word: 'Lampe', article: 'die', meaning: 'лампа' },
   { id: 11, word: 'Apfel', article: 'der', meaning: 'яблоко' },
   { id: 12, word: 'Banane', article: 'die', meaning: 'банан' },
   { id: 13, word: 'Brot', article: 'das', meaning: 'хлеб' },
   { id: 14, word: 'Milch', article: 'die', meaning: 'молоко' },
   { id: 15, word: 'Kaffee', article: 'der', meaning: 'кофе' },
   { id: 16, word: 'Wasser', article: 'das', meaning: 'вода' },
   { id: 17, word: 'Tee', article: 'der', meaning: 'чай' },
   { id: 18, word: 'Suppe', article: 'die', meaning: 'суп' },
   { id: 19, word: 'Fleisch', article: 'das', meaning: 'мясо' },
   { id: 20, word: 'Fisch', article: 'der', meaning: 'рыба' }
];

const a12 = [
   { id: 1, word: 'Baum', article: 'der', meaning: 'дерево' },
   { id: 2, word: 'Blume', article: 'die', meaning: 'цветок' },
   { id: 3, word: 'Gras', article: 'das', meaning: 'трава' },
   { id: 4, word: 'Blatt', article: 'das', meaning: 'лист' },
   { id: 5, word: 'Tier', article: 'das', meaning: 'животное' },
   { id: 6, word: 'Vogel', article: 'der', meaning: 'птица' },
   { id: 7, word: 'Ente', article: 'die', meaning: 'утка' },
   { id: 8, word: 'Pferd', article: 'das', meaning: 'лошадь' },
   { id: 9, word: 'Elefant', article: 'der', meaning: 'слон' },
   { id: 10, word: 'Giraffe', article: 'die', meaning: 'жираф' },
   { id: 11, word: 'Löwe', article: 'der', meaning: 'лев' },
   { id: 12, word: 'Maus', article: 'die', meaning: 'мышь' },
   { id: 13, word: 'Eichhörnchen', article: 'das', meaning: 'белка' },
   { id: 14, word: 'Eule', article: 'die', meaning: 'сова' },
   { id: 15, word: 'Frosch', article: 'der', meaning: 'лягушка' },
   { id: 16, word: 'Schwein', article: 'das', meaning: 'свинья' },
   { id: 17, word: 'Kuh', article: 'die', meaning: 'корова' },
   { id: 18, word: 'Schaf', article: 'das', meaning: 'овца' },
   { id: 19, word: "Hase", article: "der", meaning: "заяц" },
   { id: "20", word: "Bär", article: "der", meaning: "медведь" }
];

const a21 = []
const a22 = []
const b11 = []
const b12 = []

export const allWords = a11.concat(a12);
export const modules = [
   { name: 'Все', module: allWords },
   { name: 'A1.1', module: a11 },
   { name: 'A1.2', module: a12 },
   { name: 'A2.1', module: a21 },
   { name: 'A2.2', module: a22 },
   { name: 'B1.1', module: b11 },
   { name: 'B1.2', module: b12 }
]