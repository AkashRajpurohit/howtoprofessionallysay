export enum Flow {
  A_TO_B = 'A_TO_B',
  B_TO_A = 'B_TO_A',
}

export interface IQnA {
  id: string | number;
  question: string;
  answer: string;
  alternativeAnswers?: string[];
}

export interface IFilterOptions {
  favorite: boolean;
  all: boolean;
}

export interface UmamiWindow extends Window {
  umami: {
    track: (event_name: string, event_data: Record<any, any>) => void;
  };
}
