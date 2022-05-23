import { trackOutboundLink } from 'lib/analytics';
import siteMetadata from 'lib/sitemetadata';
import React, { FunctionComponent } from 'react';

interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = (): JSX.Element => {
  return (
    <header className="flex min-h-[40vh] flex-col items-center justify-center gap-6 bg-primary-900 py-20 px-4 print:hidden">
      <h1 className="break-words bg-gradient-to-r from-yellow-500 to-teal-400 bg-clip-text p-2 text-center font-dancing text-6xl font-extrabold leading-tight tracking-tighter text-transparent sm:leading-10 xl:text-8xl">
        {siteMetadata.title}
      </h1>
      <p className="text-center text-xl font-bold text-gray-200">
        {siteMetadata.description}{' '}
        <small className="text-sm text-gray-300">
          (not really, try at your own risk)
        </small>
      </p>
      <div className="flex flex-col gap-6 md:flex-row">
        <a
          href={siteMetadata.siteRepo}
          rel="nofollow noopener noreferrer"
          target="_blank"
          onClick={() => trackOutboundLink(siteMetadata.siteRepo)}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-4 px-5 py-3 font-medium text-indigo-600 shadow-2xl"
        >
          <span className="ease absolute top-0 left-0 -mt-10 -ml-3 h-40 w-40 rounded-full bg-red-500 blur-md transition-all duration-700"></span>
          <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
            <span className="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-purple-500 blur-md"></span>
            <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-pink-500 blur-md"></span>
          </span>
          <span className="relative text-white">⭐ Github</span>
        </a>
        <a
          href={siteMetadata.loewhaley}
          rel="nofollow noopener noreferrer"
          target="_blank"
          onClick={() => trackOutboundLink(siteMetadata.loewhaley)}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-bold text-white shadow-2xl"
        >
          <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 opacity-0 transition duration-300 ease-out group-hover:opacity-100"></span>
          <span className="absolute top-0 left-0 h-1/3 w-full bg-gradient-to-b from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 left-0 h-full w-4 bg-gradient-to-r from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 right-0 h-full w-4 bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span className="absolute inset-0 h-full w-full rounded-md border border-white opacity-10"></span>
          <span className="absolute h-0 w-0 rounded-full bg-white opacity-5 transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56"></span>
          <span className="relative">Follow @loewhaley</span>
        </a>
        <a
          href={siteMetadata.supportUrl}
          rel="nofollow noopener noreferrer"
          target="_blank"
          onClick={() => trackOutboundLink(siteMetadata.supportUrl)}
          className="group relative inline-block text-lg"
        >
          <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
            <span className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3"></span>
            <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
            <span className="relative">Support ☕</span>
          </span>
          <span
            className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
        <a
          href={siteMetadata.siteBlogAt}
          rel="nofollow noopener noreferrer"
          target="_blank"
          onClick={() => trackOutboundLink(siteMetadata.siteBlogAt)}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-primary-500 p-4 px-6 py-3 font-medium text-indigo-600 shadow-md transition duration-300 ease-out"
        >
          <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-primary-500 text-white duration-300 group-hover:translate-x-0">
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="ease absolute flex h-full w-full transform items-center justify-center text-white transition-all duration-300 group-hover:translate-x-full">
            Read More
          </span>
          <span className="invisible relative">Read More</span>
        </a>
      </div>
      <p className="text-xs">
        PS: I am looking for additional data sources and make it more
        appropriate for most people. <br /> If you are looking to contribute
        then please reach out to me at {siteMetadata.email}
      </p>
    </header>
  );
};

export default Header;
