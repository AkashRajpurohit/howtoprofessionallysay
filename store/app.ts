import { Flow, IQnA, IFilterOptions } from 'lib/types';
import { matchSorter } from 'match-sorter';
import create from 'zustand';
import qnas from 'content/qna';
import { CURRENT_FLOW_KEY, FAV_KEY, FILTER_OPTIONS_KEY } from 'lib/utils';

interface IAppState {
  flow: Flow;
  toggleFlow: () => void;
  setFlow: (flow: Flow) => void;
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
    if (currentFlow === Flow.A_TO_B) {
      get().setFlow(Flow.B_TO_A);
    } else {
      get().setFlow(Flow.A_TO_B);
    }
  },
  setFlow: (flow: Flow) => {
    set((state) => ({ ...state, flow }));

    if (window && window.localStorage) {
      window.localStorage.setItem(CURRENT_FLOW_KEY, flow);
    }
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

    if (window && window.localStorage) {
      window.localStorage.setItem(FILTER_OPTIONS_KEY, option);
    }
  },
}));

export default useStore;
