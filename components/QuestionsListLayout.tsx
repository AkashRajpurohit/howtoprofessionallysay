import { IQnA } from 'lib/types';
import React, { FunctionComponent, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import useStore from 'store/app';
import NoQuestionFound from './NoQuestionFound';
import SearchInput from './SearchInput';
import { FAV_KEY } from 'lib/utils';
import FlowOfData from './FlowOfData';
import PrintPageButton from './PrintPageButton';
import FilterVisibilityModeButton from './FilterVisibilityModeButton';

const QuestionsListLayout: FunctionComponent = (): JSX.Element => {
  const {
    questionsToDisplay,
    favoriteQuestions,
    setFavoriteQuestions,
    filterOptions,
  } = useStore();

  useEffect(() => {
    if (window) {
      const fav = JSON.parse(
        window.localStorage.getItem(FAV_KEY) ?? '[]'
      ) as IQnA[];
      setFavoriteQuestions(fav);
    }
  }, []);

  const questionsToRenderBasedOnFilterOptions = filterOptions.all
    ? questionsToDisplay
    : favoriteQuestions;

  return (
    <div>
      <FlowOfData />
      <div className="flex items-center gap-3 print:hidden">
        <div className="flex-grow">
          <SearchInput />
        </div>
        <PrintPageButton />
        <FilterVisibilityModeButton />
      </div>
      <ul role="list" className="divide-y-2 divide-gray-500">
        {!questionsToRenderBasedOnFilterOptions.length && <NoQuestionFound />}
        {questionsToRenderBasedOnFilterOptions.map((qna) => (
          <li key={qna.id} className="py-6">
            <QuestionCard qna={qna} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsListLayout;
