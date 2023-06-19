import { useState } from 'react';

type StorageValue<T> = [T, (value: T) => void];

export default function useLocalStorage<T>(key: string, initialValue: T): StorageValue<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
