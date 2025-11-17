'use client';

import { useState, useEffect } from 'react';
import apiClient from '../client';
import type {
  ContactFormSubmission,
  ContactFormSubmit,
  ContactFormUpdate,
  ContactFormListResponse,
  ContactFormFilters,
  ContactFormStatistics,
} from '../types';

export function useContactFormSubmissions(filters?: ContactFormFilters) {
  const [data, setData] = useState<ContactFormListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<ContactFormListResponse>(
        '/api/contact-form/submissions',
        { params: filters }
      );
      setData(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch submissions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [JSON.stringify(filters)]);

  return {
    submissions: data?.submissions || [],
    total: data?.total || 0,
    page: data?.page || 1,
    limit: data?.limit || 20,
    loading,
    error,
    refresh: fetchSubmissions,
  };
}

export function useContactFormSubmission(submissionId: string) {
  const [submission, setSubmission] = useState<ContactFormSubmission | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get<ContactFormSubmission>(
          `/api/contact-form/submissions/${submissionId}`
        );
        setSubmission(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch submission');
      } finally {
        setLoading(false);
      }
    };

    if (submissionId) {
      fetchSubmission();
    }
  }, [submissionId]);

  return { submission, loading, error };
}

export function useContactFormMutations() {
  const [loading, setLoading] = useState(false);

  const submitContactForm = async (data: ContactFormSubmit) => {
    try {
      setLoading(true);
      const response = await apiClient.post<ContactFormSubmission>(
        '/api/contact-form/submit',
        data
      );
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  const updateSubmission = async (submissionId: string, data: ContactFormUpdate) => {
    try {
      setLoading(true);
      const response = await apiClient.put<ContactFormSubmission>(
        `/api/contact-form/submissions/${submissionId}`,
        data
      );
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to update submission');
    } finally {
      setLoading(false);
    }
  };

  const deleteSubmission = async (submissionId: string) => {
    try {
      setLoading(true);
      await apiClient.delete(`/api/contact-form/submissions/${submissionId}`);
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to delete submission');
    } finally {
      setLoading(false);
    }
  };

  return {
    submitContactForm,
    updateSubmission,
    deleteSubmission,
    loading,
  };
}

export function useContactFormStatistics(startDate?: string, endDate?: string) {
  const [statistics, setStatistics] = useState<ContactFormStatistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatistics = async () => {
    try {
      setLoading(true);
      const params: any = {};
      if (startDate) params.start_date = startDate;
      if (endDate) params.end_date = endDate;
      
      const response = await apiClient.get<ContactFormStatistics>(
        '/api/contact-form/statistics',
        { params }
      );
      setStatistics(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch statistics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, [startDate, endDate]);

  return { statistics, loading, error, refresh: fetchStatistics };
}
