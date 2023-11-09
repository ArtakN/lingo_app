const a11 = [
   { id: 'a11-1', word: 'Hund', article: 'der', meaning: 'собака' },
   { id: 'a11-2', word: 'Katze', article: 'die', meaning: 'кошка' },
   { id: 'a11-3', word: 'Haus', article: 'das', meaning: 'дом' },
   { id: 'a11-4', word: 'Buch', article: 'das', meaning: 'книга' }
];

const a12 = [
   { id: 'a12-1', word: 'Baum', article: 'der', meaning: 'дерево' },
   { id: 'a12-2', word: 'Blume', article: 'die', meaning: 'цветок' },
   { id: 'a12-3', word: 'Gras', article: 'das', meaning: 'трава' },
   { id: 'a12-4', word: 'Fisch', article: 'der', meaning: 'рыба' }
];

const a21 = [
   { id: 'a21-1', word: 'Blatt', article: 'das', meaning: 'лист' },
   { id: 'a21-2', word: 'Tier', article: 'das', meaning: 'животное' },
   { id: 'a21-3', word: 'Vogel', article: 'der', meaning: 'птица' },
   { id: 'a21-4', word: 'Ente', article: 'die', meaning: 'утка' }
]

const a22 = [
   { id: 'a22-1', word: 'Pferd', article: 'das', meaning: 'лошадь' },
   { id: 'a22-2', word: 'Elefant', article: 'der', meaning: 'слон' },
   { id: 'a22-3', word: 'Giraffe', article: 'die', meaning: 'жираф' },
   { id: 'a22-4', word: 'Löwe', article: 'der', meaning: 'лев' },
]

const b11 = [
   { id: 'b11-1', word: 'Eichhörnchen', article: 'das', meaning: 'белка' },
   { id: 'b11-2', word: 'Eule', article: 'die', meaning: 'сова' },
   { id: 'b11-3', word: 'Frosch', article: 'der', meaning: 'лягушка' },
   { id: 'b11-4', word: 'Schwein', article: 'das', meaning: 'свинья' }
]

const b12 = [
   { id: 'b12-1', word: 'Kuh', article: 'die', meaning: 'корова' },
   { id: 'b12-2', word: 'Schaf', article: 'das', meaning: 'овца' },
   { id: 'b12-3', word: "Hase", article: "der", meaning: "заяц" },
   { id: 'b12-4', word: "Bär", article: "der", meaning: "медведь" }
]

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
