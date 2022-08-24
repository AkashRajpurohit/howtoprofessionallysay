import { Flow, IQnA, IFilterOptions } from 'lib/types';
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
  filterOptions: IFilterOptions;
  setFilterOption: (option: keyof IFilterOptions) => void;
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
  filterOptions: { favorite: false, all: true },
  setFilterOption: (option) => {
    const updatedFilterOptions: IFilterOptions = {
      favorite: false,
      all: false,
    };

    if (option === 'all') {
      updatedFilterOptions.all = true;
    } else if (option === 'favorite') {
      updatedFilterOptions.favorite = true;
    }

    set((state) => ({ ...state, filterOptions: updatedFilterOptions }));
  },
}));

export default useStore;
