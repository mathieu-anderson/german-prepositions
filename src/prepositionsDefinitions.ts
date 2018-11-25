type Definition = {
  name: string,
  dative: boolean,
  accusative: boolean,
  datExample: string | null,
  accExample: string | null
}

const definitions: Definition[] = [
  {
    name: 'an',
    dative: true,
    accusative: true,
    datExample: 'Ich bin am Meer',
    accExample: 'Ich gehe mit dir ans Ende der Welt'
  },
  {
    name: 'auf',
    dative: true,
    accusative: true,
    datExample: 'Ich bin auf der Insel',
    accExample: 'Ich fliege auf die Insel'
  },
  {
    name: 'aus',
    dative: true,
    accusative: false,
    datExample: 'Er kommt aus der Küche',
    accExample: null
  },
  {
    name: 'ausser',
    dative: true,
    accusative: false,
    datExample: 'Außer der Liebe nichts',
    accExample: null
  },
  {
    name: 'bei',
    dative: true,
    accusative: false,
    datExample: 'Die Schule ist bei der Apotheke',
    accExample: null
  },
  {
    name: 'durch',
    dative: false,
    accusative: true,
    datExample: null,
    accExample: 'Wir fahren durch den Fluss'
  },
  {
    name: 'für',
    dative: false,
    accusative: true,
    datExample: null,
    accExample: 'Ich sterbe für dich'
  },
  {
    name: 'gegen',
    dative: false,
    accusative: true,
    datExample: null,
    accExample: 'Du bist gegen die Wand'
  },
  {
    name: 'gegenüber',
    dative: true,
    accusative: false,
    datExample: 'Die Bank liegt dem Bahnhof gegenüber',
    accExample: null
  },
  {
    name: 'hinter',
    dative: true,
    accusative: true,
    datExample: 'Hinter unserem Haus ist ein Garten',
    accExample: 'Gehen Sie bitte hinter das Haus'
  },
  {
    name: 'in',
    dative: true,
    accusative: true,
    datExample: 'Ich bin im Kino',
    accExample: 'Wie oft gehts du ins Kino?'
  },
  {
    name: 'mit',
    dative: true,
    accusative: false,
    datExample: 'Ich reise mit meinem Fahrrad',
    accExample: null
  },
  {
    name: 'nach',
    dative: true,
    accusative: false,
    datExample: 'Sie studiert nach der Arbeit',
    accExample: null
  },
  {
    name: 'neben',
    dative: true,
    accusative: true,
    datExample: 'Die Maus bleibt neben dem Tisch',
    accExample: 'Der Vogel fliegt neben das Fenster'
  },
  {
    name: 'ohne',
    dative: false,
    accusative: true,
    datExample: null,
    accExample: 'Nicht ohne meinen Hut'
  },
  {
    name: 'seit',
    dative: true,
    accusative: false,
    datExample: 'Ich lebe seit einem Monat in Berlin',
    accExample: null
  },
  {
    name: 'über',
    dative: true,
    accusative: true,
    datExample: 'Die Lampe steht über dem Tisch',
    accExample: 'Ich kaufe alles über das Internet'
  },
  {
    name: 'um',
    dative: false,
    accusative: true,
    datExample: null,
    accExample: 'Mein Hund läuft um das Haus'
  },
  {
    name: 'unter',
    dative: true,
    accusative: true,
    datExample: 'Meine Katze ist unter dem Tisch',
    accExample: 'Seine Katze geht unter den Tisch'
  },
  {
    name: 'von',
    dative: true,
    accusative: false,
    datExample: 'Das Lied von der Erde',
    accExample: null
  },
  {
    name: 'vor',
    dative: true,
    accusative: true,
    datExample: 'Sie wartet vor der Schule',
    accExample: 'Stell die Schuhe vor die Tür'
  },
  {
    name: 'zu',
    dative: true,
    accusative: false,
    datExample: 'Er läuft zu seiner Mutter',
    accExample: null
  },
  {
    name: 'zwischen',
    dative: true,
    accusative: true,
    datExample: 'Das Bad liegt zwischen der Küche und dem Wohnzimmer',
    accExample: 'Sie steckte den Brief zwischen die Seiten das Buch'
  }
]

export default definitions;
