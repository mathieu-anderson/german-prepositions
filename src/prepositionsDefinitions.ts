const dative = {
  always: [ 'bei', 'gegenüber', 'mit', 'nach', 'seit', 'von', 'zu'],
  noMovement: [ 'hinter', 'in', 'neben', 'über', 'unter', 'vor', 'zwischen']
}

const accusative = {
  always: ['durch', 'für', 'gegen', 'ohne', 'um'],
  movement: [ 'hinter', 'in', 'neben', 'über', 'unter', 'vor', 'zwischen']
}

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
    datExample: 'Er kommt aus der Küche.',
    accExample: null
  },
  {
    name: 'ausser',
    dative: true,
    accusative: false,
    datExample: 'Außer der Liebe nichts',
    accExample: null
  }
]

export default definitions;
