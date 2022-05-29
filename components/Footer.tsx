import { trackOutboundLink } from 'lib/analytics';
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
          onClick={() =>
            trackOutboundLink(
              'https://akashrajpurohit.com?ref=howtoprofessionallysay'
            )
          }
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
          onClick={() => trackOutboundLink(siteMetadata.siteRepo)}
          className="text-gray-200 underline hover:text-gray-300"
        >
          @loewhaley
        </a>
      </p>
      <p className="flex gap-3">
        <span className="print:hidden">
          <a href="/" className="text-gray-200 underline hover:text-gray-300">
            Home
          </a>
        </span>
        <span>
          <a
            href={siteMetadata.siteRepo}
            rel="nofollow noopener noreferrer"
            target="_blank"
            onClick={() => trackOutboundLink(siteMetadata.siteRepo)}
            className="text-gray-200 underline hover:text-gray-300"
          >
            Github
          </a>
        </span>
        <span className="print:hidden">
          <a
            href="/terms-of-service"
            className="text-gray-200 underline hover:text-gray-300"
          >
            Terms of Service
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
