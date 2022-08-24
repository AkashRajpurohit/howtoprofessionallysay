import { Flow, IQnA } from 'lib/types';
import { matchSorter } from 'match-sorter';
import create from 'zustand';
import qnas from 'content/qna';
import { FAV_KEY } from 'lib/utils';

interface IAppState {
  flow: Flow;
  toggleFlow: () => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  questionsToDisplay: IQnA[];
  setQuestionsToDisplay: (questions: IQnA[]) => void;
  favoriteQuestions: IQnA[];
  setFavoriteQuestions: (questions: IQnA[]) => void;
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
  favoriteQuestions: [],
  setFavoriteQuestions: (questions: IQnA[]) => {
    set((state) => ({ ...state, favoriteQuestions: questions }));
    if (window && window.localStorage) {
      window.localStorage.setItem(FAV_KEY, JSON.stringify(questions));
    }
  },
}));

export default useStore;
