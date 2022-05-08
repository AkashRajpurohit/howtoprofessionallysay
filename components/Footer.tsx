import siteMetadata from 'lib/sitemetadata';
import React, { FunctionComponent } from 'react';

interface IFooterProps {}

const Footer: FunctionComponent<IFooterProps> = (): JSX.Element => {
  return (
    <footer className="mx-auto flex flex-col items-center justify-around gap-4 bg-primary-600 py-12 px-4 text-gray-200 md:flex-row">
      <p className="font-medium">
        Made by{' '}
        <a
          href="https://akashrajpurohit.com?ref=howtoprofessionallysay"
          rel="nofollow noopener noreferrer"
          className="text-gray-200 underline hover:text-gray-300"
        >
          Akash Rajpurohit
        </a>
      </p>
      <p className="font-medium">
        Special thanks to{' '}
        <a
          href={siteMetadata.loewhaley}
          rel="nofollow noopener noreferrer"
          className="text-gray-200 underline hover:text-gray-300"
        >
          @loewhaley
        </a>
      </p>
      <p className="flex gap-3">
        <span>
          <a
            href={siteMetadata.siteRepo}
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="text-gray-200 underline hover:text-gray-300"
          >
            Github
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
