const a1 = [
   { id: "a1-1", de: "ab (ab heute)", article: "", en: "from (from today)", ru: "с (с сегодняшнего дня)" },
   { id: "a1-2", de: "aber", article: "", en: "but", ru: "но" },
   { id: "a1-3", de: "abfahren (fuhr ab, abgefahren)", article: "", en: "to depart", ru: "отправляться" },
   { id: "a1-4", de: "Abfahrt", article: "die", en: "departure", ru: "отправление" },
   { id: "a1-5", de: "abgeben (geben ab, abgegeben)", article: "", en: "to hand something in", ru: "сдать что-то (сдал, сдано)" },
   { id: "a1-6", de: "abholen (holte ab, abgeholt)", article: "", en: "to pick up (to collect sth.)", ru: "забрать" },
   { id: "a1-7", de: "Absender (die Absenderin)", article: "der", en: "sender", ru: "отправитель (отправительница)" },
   { id: "a1-8", de: "Achtung", article: "die", en: "attention", ru: "внимание" },
   { id: "a1-9", de: "Adresse, Adressen", article: "die", en: "address", ru: "адрес" },
   { id: "a1-10", de: "alle (alles)", article: "", en: "all (everything)", ru: "все (всё)" },
   { id: "a1-11", de: "allein", article: "", en: "alone", ru: "один" },
   { id: "a1-12", de: "also", article: "", en: "so, thus", ru: "так, значит" },
   { id: "a1-13", de: "alt", article: "", en: "old", ru: "старый" },
   { id: "a1-14", de: "Alter", article: "das", en: "age, maturity", ru: "возраст" },
   { id: "a1-15", de: "an", article: "", en: "on (adv), at (prep)", ru: "на" },
   { id: "a1-16", de: "anbieten", article: "", en: "to offer something", ru: "предлагать" },
   { id: "a1-17", de: "Angebot, Angebote", article: "das", en: "offer", ru: "предложение" },
   { id: "a1-18", de: "anderer, andere , anderes", article: "", en: "other", ru: "другой" },
   { id: "a1-19", de: "anfangen (fing an, angefangen)", article: "", en: "to start", ru: "начинать" },
   { id: "a1-20", de: "Anfang", article: "der", en: "start", ru: "начало" },
   { id: "a1-21", de: "anklicken (klickte an, angeklickt)", article: "", en: "to click something", ru: "кликать" },
   { id: "a1-22", de: "ankommen (kam an, angekommen)", article: "", en: "to arrive", ru: "приходить" },
   { id: "a1-23", de: "Ankunft", article: "die", en: "arrival", ru: "прибытие" },
   { id: "a1-24", de: "ankreuzen (kreuzte an, angekreuzt)", article: "", en: "to cross off (/tick off)", ru: "вычёркивать" },
   { id: "a1-25", de: "anmachen (machte an, angemacht)", article: "", en: "to turn something on", ru: "включать" },
   { id: "a1-26", de: "anmelden (meldete an, angemeldet)", article: "", en: "to enroll, register", ru: "записываться, регистрироваться" },
   { id: "a1-27", de: "Anmeldung", article: "die", en: "application, registration", ru: "запись, регистрация" },
   { id: "a1-28", de: "Anrede", article: "die", en: "form of address", ru: "обращение" },
   { id: "a1-29", de: "anrufen (rief an, angerufen)", article: "", en: "to telephone", ru: "звонить" },
   { id: "a1-30", de: "Anruf, Anrufe", article: "der", en: "telephone call", ru: "звонок" },
   { id: "a1-31", de: "Anrufbeantworter", article: "der", en: "answering machine", ru: "автоответчик" },
   { id: "a1-32", de: "Ansage, Absagen", article: "die", en: "announcement", ru: "объявление" },
   { id: "a1-33", de: "Anschluss", article: "der", en: "connection", ru: "соединение" }
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