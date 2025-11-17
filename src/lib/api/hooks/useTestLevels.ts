'use client';

import { useState, useEffect } from 'react';
import apiClient from '../client';
import type { TestLevel, TestLevelCreate, TestLevelUpdate } from '../types';

export function useTestLevels(isActive?: boolean) {
  const [testLevels, setTestLevels] = useState<TestLevel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestLevels = async () => {
    try {
      setLoading(true);
      const params = isActive !== undefined ? { is_active: isActive } : {};
      const response = await apiClient.get<TestLevel[]>('/api/test-levels', { params });
      setTestLevels(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch test levels');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestLevels();
  }, [isActive]);

  return { testLevels, loading, error, refresh: fetchTestLevels };
}

export function useTestLevel(levelId: string) {
  const [testLevel, setTestLevel] = useState<TestLevel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestLevel = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get<TestLevel>(`/api/test-levels/${levelId}`);
        setTestLevel(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch test level');
      } finally {
        setLoading(false);
      }
    };

    if (levelId) {
      fetchTestLevel();
    }
  }, [levelId]);

  return { testLevel, loading, error };
}

export function useTestLevelMutations() {
  const [loading, setLoading] = useState(false);

  const createTestLevel = async (data: TestLevelCreate) => {
    try {
      setLoading(true);
      const response = await apiClient.post<TestLevel>('/api/test-levels', data);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to create test level');
    } finally {
      setLoading(false);
    }
  };

  const updateTestLevel = async (levelId: string, data: TestLevelUpdate) => {
    try {
      setLoading(true);
      const response = await apiClient.put<TestLevel>(`/api/test-levels/${levelId}`, data);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to update test level');
    } finally {
      setLoading(false);
    }
  };

  const deleteTestLevel = async (levelId: string) => {
    try {
      setLoading(true);
      await apiClient.delete(`/api/test-levels/${levelId}`);
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to delete test level');
    } finally {
      setLoading(false);
    }
  };

  return {
    createTestLevel,
    updateTestLevel,
    deleteTestLevel,
    loading,
  };
}
