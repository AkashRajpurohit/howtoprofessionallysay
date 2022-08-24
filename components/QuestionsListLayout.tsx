import { IQnA } from 'lib/types';
import React, { FunctionComponent, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import useStore from 'store/app';
import NoQuestionFound from './NoQuestionFound';
import SearchInput from './SearchInput';
import { FAV_KEY } from 'lib/utils';
import FlowOfData from './FlowOfData';
import PrintPageButton from './PrintPageButton';

const QuestionsListLayout: FunctionComponent = (): JSX.Element => {
  const { questionsToDisplay, favoriteQuestions, setFavoriteQuestions } =
    useStore();

  useEffect(() => {
    if (window) {
      const fav = JSON.parse(
        window.localStorage.getItem(FAV_KEY) ?? '[]'
      ) as IQnA[];
      setFavoriteQuestions(fav);
    }
  }, []);

  return (
    <div>
      <FlowOfData />
      <div className="flex items-center gap-3 print:hidden">
        <div className="flex-grow">
          <SearchInput />
        </div>
        <div className="flex items-center rounded-md bg-gray-700 p-2">
          <PrintPageButton />
        </div>
      </div>
      {favoriteQuestions && favoriteQuestions.length > 0 && (
        <ul role="list" className="divide-y-2 divide-gray-500">
          {favoriteQuestions.map((qna) => (
            <li key={qna.id} className="py-6">
              <QuestionCard qna={qna} />
            </li>
          ))}
        </ul>
      )}
      <ul role="list" className="divide-y-2 divide-gray-500">
        {!questionsToDisplay.length && <NoQuestionFound />}
        {questionsToDisplay.map((qna) => (
          <li key={qna.id} className="py-6">
            <QuestionCard qna={qna} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsListLayout;
