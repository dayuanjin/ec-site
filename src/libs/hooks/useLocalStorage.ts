import { useState } from "react";

type Hooks<T extends { [key: string]: unknown }> = [
  T,
  (value: Partial<T>) => void,
  () => void
];

export const useLocalStorage = <T extends { [key: string]: unknown }>(
  key: string,
  initialValue: T
): Hooks<T> => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const setValue = (value: Partial<T>) => {
    try {
      const item = window.localStorage.getItem(key);
      const currentValue = item ? JSON.parse(item) : initialValue;
      const valueToStore = {
        ...currentValue,
        ...value,
      };
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      throw new Error();
    }
  };
  const resetValue = () => {
    try {
      setStoredValue(initialValue);
      window.localStorage.removeItem(key);
    } catch (err) {
      throw new Error();
    }
  };
  return [storedValue, setValue, resetValue];
};
