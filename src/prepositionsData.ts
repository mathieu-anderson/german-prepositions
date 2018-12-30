import { Preposition } from "./types";

function getListFor(list: Preposition[], forCase: string) {
  return list.filter(prep => prep[forCase] === true);
}

const prepositionsData = [
  {
    name: "ab",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Ab dem ersten Schultag",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "an",
    translation: "not translated yet",
    dative: false,
    accusative: false,
    "two-way": true,
    datExample: "Ich bin am Meer",
    datExampleTranslation: null,
    accExample: "Ich gehe mit dir ans Ende der Welt",
    accExampleTranslation: null
  },
  {
    name: "auf",
    translation: "not translated yet",
    dative: false,
    accusative: false,
    "two-way": true,
    datExample: "Ich bin auf der Insel",
    datExampleTranslation: null,
    accExample: "Ich fliege auf die Insel",
    accExampleTranslation: null
  },
  {
    name: "aus",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Er kommt aus der Küche",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "ausser",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Außer der Liebe nichts",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "bei",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Die Schule ist bei der Apotheke",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "durch",
    translation: "by, through, due to",
    dative: false,
    accusative: true,
    "two-way": false,
    datExample: null,
    datExampleTranslation: null,
    accExample: "Wir fahren durch den Fluss",
    accExampleTranslation: "We drive through the river"
  },
  {
    name: "entgegen",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Sie lief mir entgegen",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "für",
    translation: "not translated yet",
    dative: false,
    accusative: true,
    "two-way": false,
    datExample: null,
    datExampleTranslation: null,
    accExample: "Ich sterbe für dich",
    accExampleTranslation: null
  },
  {
    name: "gegen",
    translation: "not translated yet",
    dative: false,
    accusative: true,
    "two-way": false,
    datExample: null,
    datExampleTranslation: null,
    accExample: "Du bist gegen die Wand",
    accExampleTranslation: null
  },
  {
    name: "gegenüber",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Die Bank liegt dem Bahnhof gegenüber",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "hinter",
    translation: "not translated yet",
    dative: false,
    accusative: false,
    "two-way": true,
    datExample: "Hinter unserem Haus ist ein Garten",
    datExampleTranslation: null,
    accExample: "Gehen Sie bitte hinter das Haus",
    accExampleTranslation: null
  },
  {
    name: "in",
    translation: "not translated yet",
    dative: false,
    accusative: false,
    "two-way": true,
    datExample: "Ich bin im Kino",
    datExampleTranslation: null,
    accExample: "Wie oft gehts du ins Kino?",
    accExampleTranslation: null
  },
  {
    name: "mit",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Ich reise mit meinem Fahrrad",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "nach",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Sie studiert nach der Arbeit",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "nahe",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Nahe der Natur",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "neben",
    translation: "not translated yet",
    dative: false,
    accusative: false,
    "two-way": true,
    datExample: "Die Maus bleibt neben dem Tisch",
    datExampleTranslation: null,
    accExample: "Der Vogel fliegt neben das Fenster",
    accExampleTranslation: null
  },
  {
    name: "ohne",
    translation: "not translated yet",
    dative: false,
    accusative: true,
    "two-way": false,
    datExample: null,
    datExampleTranslation: null,
    accExample: "Nicht ohne meinen Hut",
    accExampleTranslation: null
  },
  {
    name: "seit",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Ich lebe seit einem Monat in Berlin",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "über",
    translation: "not translated yet",
    dative: false,
    accusative: false,
    "two-way": true,
    datExample: "Die Lampe steht über dem Tisch",
    datExampleTranslation: null,
    accExample: "Ich kaufe alles über das Internet",
    accExampleTranslation: null
  },
  {
    name: "um",
    translation: "not translated yet",
    dative: false,
    accusative: true,
    "two-way": false,
    datExample: null,
    datExampleTranslation: null,
    accExample: "Mein Hund läuft um das Haus",
    accExampleTranslation: null
  },
  {
    name: "unter",
    translation: "not translated yet",
    dative: false,
    accusative: false,
    "two-way": true,
    datExample: "Meine Katze ist unter dem Tisch",
    datExampleTranslation: null,
    accExample: "Seine Katze geht unter den Tisch",
    accExampleTranslation: null
  },
  {
    name: "von",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Das Lied von der Erde",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "vor",
    translation: "not translated yet",
    dative: false,
    accusative: false,
    "two-way": true,
    datExample: "Sie wartet vor der Schule",
    datExampleTranslation: null,
    accExample: "Stell die Schuhe vor die Tür",
    accExampleTranslation: null
  },
  {
    name: "zu",
    translation: "not translated yet",
    dative: true,
    accusative: false,
    "two-way": false,
    datExample: "Er läuft zu seiner Mutter",
    datExampleTranslation: null,
    accExample: null,
    accExampleTranslation: null
  },
  {
    name: "zwischen",
    translation: "not translated yet",
    dative: false,
    accusative: false,
    "two-way": true,
    datExample: "Das Bad liegt zwischen der Küche und dem Wohnzimmer",
    datExampleTranslation: null,
    accExample: "Sie steckte den Brief zwischen die Seiten das Buch",
    accExampleTranslation: null
  }
];

export const dativeList = getListFor(prepositionsData, "dative");
export const accusativeList = getListFor(prepositionsData, "accusative");
export const twoWayList = getListFor(prepositionsData, "two-way");

export default prepositionsData;
