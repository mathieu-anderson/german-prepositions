export interface Preposition {
  [key: string]: string | boolean | null,
  name: string,
  dative: boolean,
  accusative: boolean,
  'two-way': boolean,
  datExample: string | null,
  accExample: string | null
}
