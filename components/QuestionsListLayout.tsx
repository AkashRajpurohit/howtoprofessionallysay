import { Flow, IFilterOptions, IQnA } from 'lib/types';
import React, { FunctionComponent, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import useStore from 'store/app';
import NoQuestionFound from './NoQuestionFound';
import SearchInput from './SearchInput';
import { CURRENT_FLOW_KEY, FAV_KEY, FILTER_OPTIONS_KEY } from 'lib/utils';
import FlowOfData from './FlowOfData';
import PrintPageButton from './PrintPageButton';
import FilterVisibilityModeButton from './FilterVisibilityModeButton';
import EternalVaultCard from './EternalVaultCard';

const QuestionsListLayout: FunctionComponent = (): JSX.Element => {
  const {
    questionsToDisplay,
    favoriteQuestions,
    setFavoriteQuestions,
    filterOptions,
    setFilterOption,
    setFlow,
  } = useStore();

  useEffect(() => {
    if (window) {
      // Set state from localStorage after UI is mounted
      const fav = JSON.parse(
        window.localStorage.getItem(FAV_KEY) ?? '[]'
      ) as IQnA[];
      setFavoriteQuestions(fav);

      let filterOption = window.localStorage.getItem(
        FILTER_OPTIONS_KEY
      ) as keyof IFilterOptions;
      if (!filterOption || !['all', 'favorite'].includes(filterOption)) {
        filterOption = 'all';
      }
      setFilterOption(filterOption);

      let currentFlow = (window.localStorage.getItem(CURRENT_FLOW_KEY) ??
        Flow.A_TO_B) as Flow;
      setFlow(currentFlow);
    }
  }, []);

  const questionsToRenderBasedOnFilterOptions = filterOptions.all
    ? questionsToDisplay
    : favoriteQuestions;

  return (
    <div>
      <div className="top-0 z-50 bg-gray-50 py-4 shadow-none dark:bg-gray-900 lg:sticky">
        <FlowOfData />
        <div className="flex items-center gap-3 print:hidden">
          <div className="flex-grow">
            <SearchInput />
          </div>
          <PrintPageButton />
          <FilterVisibilityModeButton />
        </div>
      </div>
      <ul role="list" className="divide-y-2 divide-gray-500">
        {!questionsToRenderBasedOnFilterOptions.length && <NoQuestionFound />}
        {questionsToRenderBasedOnFilterOptions.map((qna, index) => (
          <React.Fragment key={qna.id}>
            <li className="py-6">
              <QuestionCard qna={qna} />
            </li>
            {index === 0 && (
              <li className="py-6">
                <EternalVaultCard />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsListLayout;
