import { useSWRConfig } from "swr";
import { useState } from "react";
import { Entry } from "../models";
import { getEntriesUrl, getEntryUrl } from "./routes";

export const useEntryActions = () => {
  const { mutate } = useSWRConfig();
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const [isLoadingRemove, setIsLoadingRemove] = useState(false);
  const [isLoadingPublish, setIsLoadingPublish] = useState(false);

  const handleUpdateEntry = async (entry: Entry) => {
    setIsLoadingUpdate(true);
    const response = await fetch(getEntryUrl(entry.id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });

    if (response.ok) {
      const data = await response.json();
      const updatedEntry = data as Entry;
      mutate(getEntriesUrl());
      mutate(getEntryUrl(entry.id), updatedEntry);
      setIsLoadingUpdate(false);
      return updatedEntry;
    }
    setIsLoadingUpdate(false);

    throw new Error("Error updating entry");
  };

  const handleCreateEntry = async (entry: Omit<Entry, "id">) => {
    setIsLoadingCreate(true);
    const response = await fetch(getEntriesUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });

    if (response.ok) {
      const data = await response.json();
      const createdEntry = data as Entry;
      mutate(getEntriesUrl());
      mutate(getEntryUrl(createdEntry.id), createdEntry, false);
      setIsLoadingCreate(false);
      return createdEntry;
    }
    setIsLoadingCreate(false);

    throw new Error("Error creating entry");
  };

  const handleRemoveEntry = async (id: string) => {
    setIsLoadingRemove(true);

    const response = await fetch(getEntryUrl(id), {
      method: "DELETE",
    });

    if (response.ok) {
      mutate(getEntriesUrl());
      setIsLoadingRemove(false);
      return null;
    }

    setIsLoadingRemove(false);
    throw new Error("Error removing entry");
  };

  const handlePublishEntry = async (entry: Entry, isPublished = true) => {
    setIsLoadingPublish(true);
    const updated = await handleUpdateEntry({ ...entry, isPublished });
    setIsLoadingPublish(false);
    return updated;
  };

  return {
    handleCreateEntry,
    handleUpdateEntry,
    handleRemoveEntry,
    handlePublishEntry,
    isLoadingCreate,
    isLoadingUpdate,
    isLoadingRemove,
    isLoadingPublish,
  };
};
