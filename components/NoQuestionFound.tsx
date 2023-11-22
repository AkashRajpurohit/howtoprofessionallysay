import siteMetadata from 'lib/sitemetadata';
import React, { FunctionComponent } from 'react';

const NoQuestionFound: FunctionComponent = (): JSX.Element => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-10">
      <img
        src={'/static/images/not-found.svg'}
        width={250}
        height={300}
        alt="data not found"
      />
      <div className="space-y-1 text-center">
        <p>No data found for this option.</p>
        <p>
          Want to add it?{' '}
          <a
            href={siteMetadata.contributeFormLink}
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary-500 hover:text-primary-400"
          >
            Click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default NoQuestionFound;
