export interface Preposition {
  [key: string]: string | boolean | null;
  name: string;
  translation: string;
  dative: boolean;
  accusative: boolean;
  "two-way": boolean;
  datExample: string | null;
  datExampleTranslation: string | null;
  accExample: string | null;
  accExampleTranslation: string | null;
}
