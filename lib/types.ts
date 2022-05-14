export enum Flow {
  A_TO_B = 'A_TO_B',
  B_TO_A = 'B_TO_A',
}

export interface IQnA {
  question: string;
  answer: string;
  alternativeAnswers?: string[];
}
