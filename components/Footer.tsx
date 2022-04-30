import React, { FunctionComponent } from 'react';

interface IFooterProps {}

const Footer: FunctionComponent<IFooterProps> = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-between bg-primary-600 py-12 px-40 text-gray-200">
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
          href="https://www.instagram.com/loewhaley/"
          rel="nofollow noopener noreferrer"
          className="text-gray-200 underline hover:text-gray-300"
        >
          @loewhaley
        </a>{' '}
        and her work bestie.
      </p>
      <p>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://github.com/AkashRajpurohit/howdoyouprofessionallysay"
              rel="nofollow noopener noreferrer"
              className="text-gray-200 underline hover:text-gray-300"
            >
              Github
            </a>
          </li>
        </ul>
      </p>
    </footer>
  );
};

export default Footer;
