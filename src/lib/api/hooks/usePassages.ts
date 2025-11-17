'use client';

import { useState, useEffect } from 'react';
import apiClient from '../client';
import type {
  Passage,
  PassageCreate,
  PassageUpdate,
  PassageListResponse,
  PassageFilters,
} from '../types';

export function usePassages(filters?: PassageFilters) {
  const [data, setData] = useState<PassageListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPassages = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<PassageListResponse>('/api/passages', {
        params: filters,
      });
      setData(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch passages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPassages();
  }, [JSON.stringify(filters)]);

  return {
    passages: data?.passages || [],
    total: data?.total || 0,
    page: data?.page || 1,
    limit: data?.limit || 20,
    loading,
    error,
    refresh: fetchPassages,
  };
}

export function usePassage(passageId: string) {
  const [passage, setPassage] = useState<Passage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPassage = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get<Passage>(`/api/passages/${passageId}`);
        setPassage(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch passage');
      } finally {
        setLoading(false);
      }
    };

    if (passageId) {
      fetchPassage();
    }
  }, [passageId]);

  return { passage, loading, error };
}

export function usePassageMutations() {
  const [loading, setLoading] = useState(false);

  const createPassage = async (data: PassageCreate) => {
    try {
      setLoading(true);
      const response = await apiClient.post<Passage>('/api/passages', data);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to create passage');
    } finally {
      setLoading(false);
    }
  };

  const updatePassage = async (passageId: string, data: PassageUpdate) => {
    try {
      setLoading(true);
      const response = await apiClient.put<Passage>(`/api/passages/${passageId}`, data);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to update passage');
    } finally {
      setLoading(false);
    }
  };

  const deletePassage = async (passageId: string) => {
    try {
      setLoading(true);
      await apiClient.delete(`/api/passages/${passageId}`);
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to delete passage');
    } finally {
      setLoading(false);
    }
  };

  return {
    createPassage,
    updatePassage,
    deletePassage,
    loading,
  };
}
