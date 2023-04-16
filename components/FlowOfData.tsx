import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import { Flow } from 'lib/types';
import { FunctionComponent } from 'react';
import { ArrowRight, ArrowDown } from 'react-feather';
import useStore from 'store/app';

const FlowOfData: FunctionComponent = () => {
  const { flow, toggleFlow } = useStore();
  const enabled = flow === Flow.B_TO_A;

  return (
    <div className="mb-4 flex items-center justify-between print:hidden">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">Current flow of data</p>
        {enabled ? (
          <p className="flex flex-col gap-2 md:flex-row">
            <span className="font-semibold text-red-800 dark:text-red-500">
              What you are being told by someone
            </span>
            <span className="h-5 w-5">
              <ArrowRight className="hidden md:block" />
              <ArrowDown className="block md:hidden" />
            </span>
            <span className="font-semibold text-green-800 dark:text-green-500">
              What they actually mean
            </span>
          </p>
        ) : (
          <p className="flex flex-col gap-2 md:flex-row">
            <span className="font-semibold text-red-800 dark:text-red-500">
              What you might feel like saying
            </span>
            <span className="h-5 w-5">
              <ArrowRight className="hidden md:block" />
              <ArrowDown className="block md:hidden" />
            </span>
            <span className="font-semibold text-green-800 dark:text-green-500">
              What you can prefer to say instead
            </span>
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Switch
          checked={enabled}
          onChange={toggleFlow}
          className={clsx(
            enabled ? 'bg-primary-600' : 'bg-gray-200',
            'focus:ring-primary relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2'
          )}
        >
          <span
            aria-hidden="true"
            className={clsx(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default FlowOfData;
