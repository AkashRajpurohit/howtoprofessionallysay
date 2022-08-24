import { Menu, Transition } from '@headlessui/react';
import { IFilterOptions } from 'lib/types';
import { capitalizeFirstLetter } from 'lib/utils';
import { Check, Filter } from 'react-feather';
import useStore from 'store/app';

const FilterVisibilityModeButton = () => {
  const { filterOptions, setFilterOption } = useStore();

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className="flex items-center rounded-md bg-gray-700 p-2"
              title="filter the list by favorites or all"
            >
              <span className="sr-only">Open filters</span>
              <Filter size={24} />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            // as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-700 py-1 shadow-lg"
            >
              {Object.keys(filterOptions).map((key) => (
                <Menu.Item key={key}>
                  {() => (
                    <button
                      className="block w-full cursor-pointer px-4 py-3 text-sm text-gray-100 hover:bg-gray-600"
                      onClick={() =>
                        setFilterOption(key as keyof IFilterOptions)
                      }
                    >
                      <span className="flex flex-row items-center gap-2">
                        {filterOptions[key as keyof IFilterOptions] && (
                          <Check size={16} />
                        )}
                        {capitalizeFirstLetter(key)}
                      </span>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default FilterVisibilityModeButton;
