import {MMKVStorage} from './MMKV';

export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null> | any;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export const storage: Storage = MMKVStorage;
