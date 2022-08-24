import React, { FunctionComponent } from 'react';

const NoQuestionFound: FunctionComponent = (): JSX.Element => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-6">
      <img
        src={'/static/images/not-found.svg'}
        width={250}
        height={300}
        alt="data not found"
      />
      <p>No data found for this option.</p>
      <p>
        Want to add it? Head{' '}
        <a
          href="https://github.com/AkashRajpurohit/howtoprofessionallysay/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary-500 hover:text-primary-400"
        >
          here
        </a>
      </p>
    </div>
  );
};

export default NoQuestionFound;
