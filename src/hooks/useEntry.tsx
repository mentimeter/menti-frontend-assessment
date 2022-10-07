import useSWR from 'swr';
import { Entry } from '../models';
import { getEntryUrl } from './routes';

export const useEntry = (id: string) => {
  return useSWR<Entry>(id ? getEntryUrl(id) : null);
};
