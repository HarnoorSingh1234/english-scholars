'use client';

import { useState, useEffect } from 'react';
import apiClient from '../client';
import type {
  Question,
  QuestionCreate,
  QuestionUpdate,
  QuestionBulkCreate,
  QuestionType,
} from '../types';

export function usePassageQuestions(passageId: string, questionType?: QuestionType) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const params = questionType ? { question_type: questionType } : {};
      const response = await apiClient.get<Question[]>(
        `/api/passages/${passageId}/questions`,
        { params }
      );
      setQuestions(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch questions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (passageId) {
      fetchQuestions();
    }
  }, [passageId, questionType]);

  return { questions, loading, error, refresh: fetchQuestions };
}

export function useQuestion(questionId: string) {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get<Question>(`/api/questions/${questionId}`);
        setQuestion(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch question');
      } finally {
        setLoading(false);
      }
    };

    if (questionId) {
      fetchQuestion();
    }
  }, [questionId]);

  return { question, loading, error };
}

export function useQuestionMutations() {
  const [loading, setLoading] = useState(false);

  const createQuestionsBulk = async (passageId: string, data: QuestionBulkCreate) => {
    try {
      setLoading(true);
      const response = await apiClient.post<Question[]>(
        `/api/passages/${passageId}/questions`,
        data
      );
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to create questions');
    } finally {
      setLoading(false);
    }
  };

  const updateQuestion = async (questionId: string, data: QuestionUpdate) => {
    try {
      setLoading(true);
      const response = await apiClient.put<Question>(`/api/questions/${questionId}`, data);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to update question');
    } finally {
      setLoading(false);
    }
  };

  const deleteQuestion = async (questionId: string) => {
    try {
      setLoading(true);
      await apiClient.delete(`/api/questions/${questionId}`);
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to delete question');
    } finally {
      setLoading(false);
    }
  };

  return {
    createQuestionsBulk,
    updateQuestion,
    deleteQuestion,
    loading,
  };
}
