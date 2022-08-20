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

export interface UmamiWindow extends Window {
  umami: {
    trackEvent: (event_name: string, event_data: Record<any, any>) => void;
    trackView: (url: string) => void;
  };
}
