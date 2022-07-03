import { Flow, IQnA } from 'lib/types';
import React, { FunctionComponent } from 'react';
import { ArrowRight } from 'react-feather';
import useStore from 'store/app';

interface IQuestionCardProps {
  qna: IQnA;
}

const QuestionCard: FunctionComponent<IQuestionCardProps> = ({
  qna,
}): JSX.Element => {
  const { flow } = useStore();
  const question = flow === Flow.A_TO_B ? qna.question : qna.answer;
  const answers =
    flow === Flow.A_TO_B
      ? [qna.answer, ...(qna.alternativeAnswers || [])]
      : [qna.question];

  return (
    <div className="w-full space-y-4 divide-y divide-gray-600 rounded-md border-2 border-gray-700 bg-gray-800 px-4 py-2 shadow-lg">
      <div>
        <h3 className="select-all text-xl font-bold leading-9 tracking-tight text-primary-100 xl:text-2xl">
          {question}
        </h3>
        <span className="h-6 w-6 print:hidden"></span>
      </div>
      <div>
        <ul className="py-4 text-lg font-medium text-primary-200 xl:text-xl">
          {(answers || []).map((answer, index) => (
            <li className="my-1 flex items-start gap-2" key={index}>
              <span className="mt-0.5 hidden text-primary-500 sm:inline">
                <ArrowRight />
              </span>
              <div className="select-all">{answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionCard;
