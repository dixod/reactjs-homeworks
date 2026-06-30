import { useCallback } from 'react';

const STORAGE_KEY = 'apiLogs';

export function useFetch() {
  const request = useCallback(async (url, options = {}) => {
    const response = await fetch(url, options);

    const savedLogs = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const logItem = {
      url,
      body: options.body || null,
      status: response.status,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify([...savedLogs, logItem]));

    return response;
  }, []);

  return { request };
}
