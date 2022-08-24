import { FunctionComponent } from 'react';
import useStore from 'store/app';

const SearchInput: FunctionComponent = () => {
  const { setSearchValue, searchValue } = useStore();

  return (
    <div className="relative block">
      <span className="sr-only">Search</span>
      <input
        aria-label="What are you looking for?"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="What are you looking for?"
        className="block w-full rounded-md border border-gray-600 bg-gray-700 py-2 pr-3 shadow-sm placeholder:italic placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
      />
      <svg
        aria-hidden="true"
        className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default SearchInput;
