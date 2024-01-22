const a1 = [
   { id: "a1-1", de: "Baum", article: "der", ru: "дерево" },
   { id: "a1-2", de: "Blume", article: "die", ru: "цветок" },
   { id: "a1-3", de: "Gras", article: "das", ru: "трава" },
   { id: "a1-4", de: "Fisch", article: "der", ru: "рыба" }
];

const a2 = [
   { id: "a2-1", de: "Blatt", article: "das", ru: "лист" },
   { id: "a2-2", de: "Tier", article: "das", ru: "животное" },
   { id: "a2-3", de: "Vogel", article: "der", ru: "птица" },
   { id: "a2-4", de: "Ente", article: "die", ru: "утка" }
];

const b1 = [
   { id: "b1-1", de: "Eichhörnchen", article: "das", ru: "белка" },
   { id: "b1-2", de: "Eule", article: "die", ru: "сова" },
   { id: "b1-3", de: "Frosch", article: "der", ru: "лягушка" },
   { id: "b1-4", de: "Schwein", article: "das", ru: "свинья" }
];

const b2 = [
   { id: "b2-1", de: "Kuh", article: "die", ru: "корова" },
   { id: "b2-2", de: "Schaf", article: "das", ru: "овца" },
   { id: "b2-3", de: "Hase", article: "der", ru: "заяц" },
   { id: "b2-4", de: "Bär", article: "der", ru: "медведь" }
];

export const allWords = a1.concat(a2, b1, b2);

export const modules = [
   { name: "All", module: allWords },
   { name: "A1", module: a1 },
   { name: "A2", module: a2 },
   { name: "B1", module: b1 },
   { name: "B2", module: b2 }
];