'use client';

import { useState, useEffect } from 'react';
import apiClient from '../client';
import type { User, UserProfileUpdate, AvatarUploadResponse, UserRoleUpdate, UserRoleUpdateResponse } from '../types';

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<{ success: boolean; data: User }>('/users/me');
      setUser(response.data.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch user');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const updateProfile = async (data: UserProfileUpdate) => {
    try {
      const response = await apiClient.put<{ success: boolean; data: User }>('/users/me', data);
      setUser(response.data.data);
      return response.data.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to update profile');
    }
  };

  const updateAvatar = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await apiClient.put<{ success: boolean; data: AvatarUploadResponse }>(
        '/users/me/avatar',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      // Refresh user data after avatar upload
      await fetchUser();
      return response.data.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to upload avatar');
    }
  };

  const deleteAccount = async () => {
    try {
      await apiClient.delete('/users/me');
      setUser(null);
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to delete account');
    }
  };

  return {
    user,
    loading,
    error,
    updateProfile,
    updateAvatar,
    deleteAccount,
    refresh: fetchUser,
  };
}

export function useUserProfile(workosId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get<{ success: boolean; data: User }>(`/users/${workosId}`);
        setUser(response.data.data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    if (workosId) {
      fetchUser();
    }
  }, [workosId]);

  return { user, loading, error };
}

// Admin hook to list all users
export function useAdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<{ success: boolean; data: User[] }>('/users/admin/');
      setUsers(response.data.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateUserRole = async (workosId: string, roleData: UserRoleUpdate) => {
    try {
      const response = await apiClient.put<UserRoleUpdateResponse>(
        `/users/admin/${workosId}/role`,
        roleData
      );
      // Refresh users list after role update
      await fetchUsers();
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to update user role');
    }
  };

  return { users, loading, error, refresh: fetchUsers, updateUserRole };
}

// Teacher hook to update user roles (limited to student/teacher only)
export function useTeacherUserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<{ success: boolean; data: User[] }>('/users/teacher/');
      setUsers(response.data.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail?.[0]?.msg || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateUserRole = async (workosId: string, roleData: UserRoleUpdate) => {
    // Teachers can only assign 'student' or 'teacher' roles
    if (roleData.role === 'admin') {
      throw new Error('Teachers cannot assign admin role');
    }

    try {
      const response = await apiClient.put<UserRoleUpdateResponse>(
        `/users/teacher/${workosId}/role`,
        roleData
      );
      // Refresh users list after role update
      await fetchUsers();
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.detail?.[0]?.msg || 'Failed to update user role');
    }
  };

  return { users, loading, error, refresh: fetchUsers, updateUserRole };
}

