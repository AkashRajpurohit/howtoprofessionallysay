export enum Flow {
  A_TO_B = 'A_TO_B',
  B_TO_A = 'B_TO_A',
}

export interface IQnA {
  question: string;
  answer: string;
  alternativeAnswers?: string[];
}

export interface UmamiWindow extends Window {
  umami: {
    trackEvent: (event_value: string, event_type: string) => void;
    trackView: (url: string) => void;
  };
}
