import { Flow, IQnA } from 'lib/types';
import { matchSorter } from 'match-sorter';
import create from 'zustand';
import qnas from 'content/qna';

interface IAppState {
  flow: Flow;
  toggleFlow: () => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  questionsToDisplay: IQnA[];
  setQuestionsToDisplay: (questions: IQnA[]) => void;
}

const useStore = create<IAppState>((set, get) => ({
  flow: Flow.A_TO_B,
  toggleFlow: () => {
    const currentFlow = get().flow;
    set({ flow: currentFlow === Flow.A_TO_B ? Flow.B_TO_A : Flow.A_TO_B });
  },
  searchValue: '',
  setSearchValue: (value: string) => {
    set((state) => ({ ...state, searchValue: value }));
    if (value) {
      const filteredQuestions = matchSorter(qnas, value, {
        keys: ['question', 'answer', 'alternativeAnswers'],
      });
      set((state) => ({ ...state, questionsToDisplay: filteredQuestions }));
    } else {
      set((state) => ({ ...state, questionsToDisplay: qnas }));
    }
  },
  questionsToDisplay: qnas,
  setQuestionsToDisplay: (questions: IQnA[]) => {
    set((state) => ({ ...state, questionsToDisplay: questions }));
  },
}));

export default useStore;
