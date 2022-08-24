import { Flow, IQnA } from 'lib/types';
import React, { FunctionComponent } from 'react';
import { ArrowRight, Star } from 'react-feather';
import useStore from 'store/app';

interface IQuestionCardProps {
  qna: IQnA;
}

const QuestionCard: FunctionComponent<IQuestionCardProps> = ({
  qna,
}): JSX.Element => {
  const { flow, setFavoriteQuestions, favoriteQuestions } = useStore();
  const question = flow === Flow.A_TO_B ? qna.question : qna.answer;
  const isFavorite = favoriteQuestions.find((q) => q.id === qna.id);
  const answers =
    flow === Flow.A_TO_B
      ? [qna.answer, ...(qna.alternativeAnswers || [])]
      : [qna.question];

  const handleFavoriteClick = () => {
    const favAlreadyAdded = favoriteQuestions.find((q) => q.id === qna.id);
    let newFavs = structuredClone(favoriteQuestions) as IQnA[];

    if (favAlreadyAdded) {
      newFavs = newFavs.filter((q) => q.id !== qna.id);
    } else {
      newFavs = [qna, ...newFavs];
    }

    setFavoriteQuestions(newFavs);
  };

  return (
    <div className="w-full space-y-4 divide-y divide-gray-600 rounded-md border-2 border-gray-700 bg-gray-800 px-4 py-2 shadow-lg">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex-grow">
          <h3 className="select-all text-xl font-bold leading-9 tracking-tight text-primary-100 xl:text-2xl">
            {question}
          </h3>
        </div>
        <button
          onClick={handleFavoriteClick}
          title={`click to add to favorite`}
        >
          {isFavorite ? (
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FDE047"
              aria-hidden={true}
            >
              <path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z" />
            </svg>
          ) : (
            <Star size={24} className="text-gray-300" />
          )}
        </button>
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
