import { useCallback } from 'react';
import type { ApiLog, FetchRequest } from '../types';

const STORAGE_KEY = 'apiLogs';

export function useFetch(): { request: FetchRequest } {
  const request = useCallback<FetchRequest>(async (url, options) => {
    const response = await fetch(url, options);

    const savedLogs = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as ApiLog[];
    const logItem: ApiLog = {
      url,
      body: options?.body || null,
      status: response.status,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify([...savedLogs, logItem]));

    return response;
  }, []);

  return { request };
}
