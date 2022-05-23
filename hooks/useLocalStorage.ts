import { isBrowser, noop } from 'lib/utils';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] => {
  if (!isBrowser) {
    return [initialValue, noop];
  }

  if (!key) {
    throw new Error('useLocalStorage: key is required');
  }

  const initializer = useRef((key: string) => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        initialValue && localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    } catch {
      return initialValue;
    }
  });

  const [state, setState] = useState<T | undefined>(initializer.current(key));

  useEffect(() => setState(initializer.current(key)), [key]);

  const setValue: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valOrFunc) => {
      try {
        const newState =
          typeof valOrFunc === 'function'
            ? (valOrFunc as Function)(state)
            : valOrFunc;
        if (typeof newState === 'undefined') return;
        const value = JSON.stringify(newState);

        localStorage.setItem(key, value);
        setState(JSON.parse(value));
      } catch {
        // If user is in private mode or has storage restriction
        // localStorage can throw. Also JSON.stringify can throw.
      }
    },
    [key, setState]
  );

  return [state, setValue];
};

export default useLocalStorage;
