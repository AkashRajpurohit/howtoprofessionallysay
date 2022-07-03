import { Flow } from 'lib/types';
import React, { FunctionComponent } from 'react';
import QuestionCard from './QuestionCard';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import { ArrowDown, ArrowRight, Printer } from 'react-feather';
import { trackEvent } from 'lib/analytics';
import useStore from 'store/app';
import NoQuestionFound from './NoQuestionFound';

const SearchInput: FunctionComponent = () => {
  const { setSearchValue, searchValue } = useStore();

  return (
    <div className="relative block">
      <span className="sr-only">Search</span>
      <input
        aria-label="What are you looking for?"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="What are you looking for?"
        className="block w-full rounded-md border border-gray-600 bg-gray-700 py-2 pr-3 shadow-sm placeholder:italic placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
      />
      <svg
        aria-hidden="true"
        className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300"
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

const FlowOfData: FunctionComponent = () => {
  const { flow, toggleFlow } = useStore();
  const enabled = flow === Flow.B_TO_A;

  return (
    <div className="mb-4 flex items-center justify-between print:hidden">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">Current flow of data</p>
        {enabled ? (
          <p className="flex flex-col gap-2 md:flex-row">
            <span className="font-semibold text-red-500">
              What you are being told by someone
            </span>
            <span className="h-5 w-5">
              <ArrowRight className="hidden md:block" />
              <ArrowDown className="block md:hidden" />
            </span>
            <span className="font-semibold text-green-500">
              What they actually mean
            </span>
          </p>
        ) : (
          <p className="flex flex-col gap-2 md:flex-row">
            <span className="font-semibold text-red-500">
              What you might feel like saying
            </span>
            <span className="h-5 w-5">
              <ArrowRight className="hidden md:block" />
              <ArrowDown className="block md:hidden" />
            </span>
            <span className="font-semibold text-green-500">
              What you can prefer to say instead
            </span>
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Switch
          checked={enabled}
          onChange={toggleFlow}
          className={clsx(
            enabled ? 'bg-primary-600' : 'bg-gray-200',
            'focus:ring-primary relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2'
          )}
        >
          <span
            aria-hidden="true"
            className={clsx(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

const QuestionsListLayout: FunctionComponent = (): JSX.Element => {
  const { questionsToDisplay } = useStore();

  const printPDF = () => {
    trackEvent({ type: 'Click', value: 'Print PDF' });
    window.print();
  };

  return (
    <div>
      <FlowOfData />
      <div className="flex items-center gap-3 print:hidden">
        <div className="flex-grow">
          <SearchInput />
        </div>
        <div className="flex items-center rounded-md bg-gray-700 p-2">
          <button
            aria-label="Print the page as PDF"
            className="text-primary-500"
            title="Print the page as PDF"
            onClick={printPDF}
          >
            <Printer size={24} />
          </button>
        </div>
      </div>
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
