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

export interface Props {
  case?: string;
  link?: boolean;
}

export interface Colors {
  [key: string]: string;
  dative: string;
  accusative: string;
  "two-way": string;
}
