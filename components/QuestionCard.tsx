import { Disclosure } from '@headlessui/react';
import { IQnA } from 'lib/types';
import React, { FunctionComponent } from 'react';
import { ArrowUp } from 'react-feather';

interface IQuestionCardProps {
  qna: IQnA;
}

const QuestionCard: FunctionComponent<IQuestionCardProps> = ({
  qna,
}): JSX.Element => {
  const answers = [qna.answer, ...(qna.alternativeAnswers || [])];

  return (
    <div className="w-full">
      <Disclosure>
        {({ open }) => (
          <div className="my-2">
            <Disclosure.Button className="flex w-full items-center justify-between gap-2 bg-primary-100 px-4 py-6 text-left text-sm font-medium text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75">
              <h3 className="text-xl font-bold leading-9 tracking-tight xl:text-2xl">
                {qna.question}
              </h3>
              <span className="h-6 w-6">
                <ArrowUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } text-primary-500`}
                />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="bg-primary-200">
              <ul className="px-4 py-6 text-xl font-medium text-gray-800">
                {(answers || []).map((answer) => (
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                    <div>{answer}</div>
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default QuestionCard;
