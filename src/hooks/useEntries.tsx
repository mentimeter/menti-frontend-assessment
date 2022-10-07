import useSWR from "swr";
import { Entry } from "../models";
import { getEntriesUrl } from "./routes";

export const useEntries = () => {
  const { data, isValidating } = useSWR<Array<Entry>>(getEntriesUrl());

  return { data: data || [], isValidating };
};
