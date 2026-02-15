import React, { FunctionComponent } from 'react';
import { ExternalLink, Zap, Target } from 'react-feather';

const CatchIntentCard: FunctionComponent = (): JSX.Element => {
  return (
    <div className="group relative z-0 overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-sky-50 p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 print:hidden">
      <div className="absolute -right-2 top-4 z-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
        Promoted
      </div>

      <div className="relative">
        <div className="mb-4 flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center">
            <img
              src="https://catchintent.com//static/favicons/favicon.svg"
              alt="CatchIntent"
              className="h-10 w-10"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              CatchIntent
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Turn social conversations into qualified leads
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Stop missing warm leads. CatchIntent uses AI to monitor Reddit, X,
            LinkedIn & more — surfacing people actively looking for what you
            build, right when they need it.
          </p>

          <div className="rounded-md bg-blue-100 p-3 dark:bg-blue-900/30">
            <p className="text-xs text-blue-800 dark:text-blue-200">
              💡 <strong>You pay for leads, not noise.</strong> AI filters
              thousands of mentions down to real buying signals so you can
              engage before your competitors do.
            </p>
          </div>

          <div className="flex items-center space-x-4 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Target className="h-3 w-3 text-blue-500" />
              <span>AI intent detection</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="h-3 w-3 text-sky-500" />
              <span>Real-time alerts</span>
            </div>
          </div>

          <a
            href="https://catchintent.com?utm_source=howtoprofessionallysay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:from-blue-700 hover:to-sky-700 hover:shadow-md"
          >
            Start catching leads for free
            <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CatchIntentCard;
