import { Preposition } from './types'

function getListFor(list: Preposition[], forCase: string) {
  return list.filter(prep => prep[forCase] === true)
}

const prepositionsList = [
  {
    name: 'an',
    dative: false,
    accusative: false,
    'two-way': true,
    datExample: 'Ich bin am Meer',
    accExample: 'Ich gehe mit dir ans Ende der Welt'
  },
  {
    name: 'auf',
    dative: false,
    accusative: false,
    'two-way': true,
    datExample: 'Ich bin auf der Insel',
    accExample: 'Ich fliege auf die Insel'
  },
  {
    name: 'aus',
    dative: true,
    accusative: false,
    'two-way': false,
    datExample: 'Er kommt aus der Küche',
    accExample: null
  },
  {
    name: 'ausser',
    dative: true,
    accusative: false,
    'two-way': false,
    datExample: 'Außer der Liebe nichts',
    accExample: null
  },
  {
    name: 'bei',
    dative: true,
    accusative: false,
    'two-way': false,
    datExample: 'Die Schule ist bei der Apotheke',
    accExample: null
  },
  {
    name: 'durch',
    dative: false,
    accusative: true,
    'two-way': false,
    datExample: null,
    accExample: 'Wir fahren durch den Fluss'
  },
  {
    name: 'für',
    dative: false,
    accusative: true,
    'two-way': false,
    datExample: null,
    accExample: 'Ich sterbe für dich'
  },
  {
    name: 'gegen',
    dative: false,
    accusative: true,
    'two-way': false,
    datExample: null,
    accExample: 'Du bist gegen die Wand'
  },
  {
    name: 'gegenüber',
    dative: true,
    accusative: false,
    'two-way':false,
    datExample: 'Die Bank liegt dem Bahnhof gegenüber',
    accExample: null
  },
  {
    name: 'hinter',
    dative: false,
    accusative: false,
    'two-way':true,
    datExample: 'Hinter unserem Haus ist ein Garten',
    accExample: 'Gehen Sie bitte hinter das Haus'
  },
  {
    name: 'in',
    dative: false,
    accusative: false,
    'two-way': true,
    datExample: 'Ich bin im Kino',
    accExample: 'Wie oft gehts du ins Kino?'
  },
  {
    name: 'mit',
    dative: true,
    accusative: false,
    'two-way': false,
    datExample: 'Ich reise mit meinem Fahrrad',
    accExample: null
  },
  {
    name: 'nach',
    dative: true,
    accusative: false,
    'two-way': false,
    datExample: 'Sie studiert nach der Arbeit',
    accExample: null
  },
  {
    name: 'neben',
    dative: false,
    accusative: false,
    'two-way': true,
    datExample: 'Die Maus bleibt neben dem Tisch',
    accExample: 'Der Vogel fliegt neben das Fenster'
  },
  {
    name: 'ohne',
    dative: false,
    accusative: true,
    'two-way': false,
    datExample: null,
    accExample: 'Nicht ohne meinen Hut'
  },
  {
    name: 'seit',
    dative: true,
    accusative: false,
    'two-way': false,
    datExample: 'Ich lebe seit einem Monat in Berlin',
    accExample: null
  },
  {
    name: 'über',
    dative: false,
    accusative: false,
    'two-way': true,
    datExample: 'Die Lampe steht über dem Tisch',
    accExample: 'Ich kaufe alles über das Internet'
  },
  {
    name: 'um',
    dative: false,
    accusative: true,
    'two-way': false,
    datExample: null,
    accExample: 'Mein Hund läuft um das Haus'
  },
  {
    name: 'unter',
    dative: false,
    accusative: false,
    'two-way': true,
    datExample: 'Meine Katze ist unter dem Tisch',
    accExample: 'Seine Katze geht unter den Tisch'
  },
  {
    name: 'von',
    dative: true,
    accusative: false,
    'two-way': false,
    datExample: 'Das Lied von der Erde',
    accExample: null
  },
  {
    name: 'vor',
    dative: false,
    accusative: false,
    'two-way': true,
    datExample: 'Sie wartet vor der Schule',
    accExample: 'Stell die Schuhe vor die Tür'
  },
  {
    name: 'zu',
    dative: true,
    accusative: false,
    'two-way': false,
    datExample: 'Er läuft zu seiner Mutter',
    accExample: null
  },
  {
    name: 'zwischen',
    dative: false,
    accusative: false,
    'two-way': true,
    datExample: 'Das Bad liegt zwischen der Küche und dem Wohnzimmer',
    accExample: 'Sie steckte den Brief zwischen die Seiten das Buch'
  }
]

export const dativeList = getListFor(prepositionsList, 'dative');
export const accusativeList = getListFor(prepositionsList, 'accusative');
export const twoWayList = getListFor(prepositionsList, 'two-way');

export default prepositionsList;
