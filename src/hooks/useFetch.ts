import { useCallback } from 'react';

const STORAGE_KEY = 'apiLogs';

type ApiLog = {
  url: string;
  body: BodyInit | null;
  status: number;
  createdAt: string;
};

export function useFetch() {
  const request = useCallback(async (url: string, options: RequestInit = {}) => {
    const response = await fetch(url, options);

    const logItem: ApiLog = {
      url,
      body: options.body || null,
      status: response.status,
      createdAt: new Date().toISOString(),
    };

    const savedLogs = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as ApiLog[];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...savedLogs, logItem]));

    return response;
  }, []);

  return { request };
}
