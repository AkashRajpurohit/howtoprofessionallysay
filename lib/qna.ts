import qna from 'content/qna';
import { Flow, IQnA } from './types';

export const getQnAs = () => {
  return qna;
};

export const swapFlowOfData = (qnas: IQnA[], flow: Flow) => {
  return qnas.map((qna) => {
    const obj = { ...qna };
    obj.flow = flow;
    return obj;
  });
};
