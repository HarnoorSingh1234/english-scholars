'use client';

import { useState, useEffect } from 'react';
import apiClient from '../client';
import type {
  StudentDashboardStats,
  StudentProgressResponse,
  TeacherDashboardStats,
  GradingQueueResponse,
  AdminOverviewStats,
  ProgressPeriod,
} from '../types';
import type { SectionType } from '../types/passages.types';

// Student Statistics Hooks

export function useStudentDashboard(studentId?: string) {
  const [stats, setStats] = useState<StudentDashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const params = studentId ? { student_id: studentId } : {};
      const response = await apiClient.get<StudentDashboardStats>(
        '/stats/student/dashboard',
        { params }
      );
      setStats(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch dashboard stats');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [studentId]);

  return { stats, loading, error, refresh: fetchStats };
}

export function useStudentProgress(
  studentId?: string,
  period: ProgressPeriod = 'all_time',
  sectionType?: SectionType
) {
  const [progress, setProgress] = useState<StudentProgressResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProgress = async () => {
    try {
      setLoading(true);
      const params: any = { period };
      if (studentId) params.student_id = studentId;
      if (sectionType) params.section_type = sectionType;

      const response = await apiClient.get<StudentProgressResponse>(
        '/stats/student/progress',
        { params }
      );
      setProgress(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch progress data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, [studentId, period, sectionType]);

  return { progress, loading, error, refresh: fetchProgress };
}

// Teacher Statistics Hooks

export function useTeacherDashboard() {
  const [stats, setStats] = useState<TeacherDashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<TeacherDashboardStats>('/stats/teacher/dashboard');
      setStats(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch teacher dashboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return { stats, loading, error, refresh: fetchStats };
}

export function useGradingQueue() {
  const [queue, setQueue] = useState<GradingQueueResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQueue = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<GradingQueueResponse>('/stats/teacher/grading-queue');
      setQueue(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch grading queue');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  return { queue, loading, error, refresh: fetchQueue };
}

// Admin Statistics Hooks

export function useAdminOverview() {
  const [overview, setOverview] = useState<AdminOverviewStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOverview = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<AdminOverviewStats>('/stats/admin/overview');
      setOverview(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch admin overview');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  return { overview, loading, error, refresh: fetchOverview };
}
