import React, { FunctionComponent } from 'react';
import { ExternalLink, Heart, Shield, Users } from 'react-feather';

const EternalVaultCard: FunctionComponent = (): JSX.Element => {
  return (
    <div className="group relative z-0 overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-teal-50 to-indigo-50 p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 print:hidden">
      <div className="absolute -right-2 top-4 z-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
        Promoted
      </div>

      <div className="relative">
        <div className="mb-4 flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center">
            <img
              src="https://eternalvault.app/static/favicons/favicon-96x96.png"
              alt="Eternal Vault"
              className="h-10 w-10"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Eternal Vault
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Plan your digital legacy
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Don't leave your loved ones guessing. Secure access to your photos,
            passwords, and important documents for when they need them most.
          </p>

          <div className="rounded-md bg-teal-100 p-3 dark:bg-teal-900/30">
            <p className="text-xs text-teal-800 dark:text-teal-200">
              💡 <strong>My project:</strong> I've been working on this app to
              help families protect their digital legacy. It's completely free
              to start.
            </p>
          </div>

          <div className="flex items-center space-x-4 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Shield className="h-3 w-3 text-green-500" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3 text-teal-500" />
              <span>Family access</span>
            </div>
          </div>

          <a
            href="https://eternalvault.app?ref=howtoprofessionallysay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-teal-600 to-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:from-teal-700 hover:to-green-700 hover:shadow-md"
          >
            Start securing your digital legacy
            <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EternalVaultCard;
