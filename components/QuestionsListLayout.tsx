import { IQnA } from 'lib/types';
import React, { FunctionComponent, useState } from 'react';
import { matchSorter } from 'match-sorter';
import QuestionCard from './QuestionCard';

interface IQuestionsListLayoutProps {
  qnas: IQnA[];
}

const SearchInput: FunctionComponent<{
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setSearchValue }) => {
  return (
    <div className="relative block">
      <span className="sr-only">Search</span>
      <input
        aria-label="What are you looking for?"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="What are you looking for?"
        // className="block w-full rounded-md border border-primary-900 bg-gray-800 text-gray-100 placeholder:bg-gray-700 focus:border-primary-500 focus:ring-primary-500"
        className="block w-full rounded-md border border-gray-600 bg-gray-700 py-2 pr-3 shadow-sm placeholder:italic placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
      />
      <svg
        className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

const QuestionsListLayout: FunctionComponent<IQuestionsListLayoutProps> = ({
  qnas,
}): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const filteredQuestions = matchSorter(qnas, searchValue, {
    keys: ['question', 'answer', 'alternativeAnswers'],
  });

  const questionsToDisplay =
    qnas.length > 0 && !searchValue ? qnas : filteredQuestions;

  return (
    <div>
      <SearchInput setSearchValue={setSearchValue} />
      <ul className="mt-4 flex flex-col gap-3">
        {!questionsToDisplay.length && <li>No questions found</li>}
        {questionsToDisplay.map((qna) => (
          <li key={qna.question}>
            <QuestionCard qna={qna} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsListLayout;
