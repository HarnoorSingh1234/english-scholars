'use client';

import { useState } from 'react';
import { useTeacherUserManagement } from '@/lib/api';
import type { User, UserRole } from '@/lib/api/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function TeacherUserRoleManager() {
  const { users, loading, error, updateUserRole } = useTeacherUserManagement();
  const [updatingUserId, setUpdatingUserId] = useState<string | null>(null);

  const handleRoleUpdate = async (workosId: string, newRole: UserRole) => {
    if (newRole === 'admin') {
      alert('Teachers cannot assign admin role');
      return;
    }

    setUpdatingUserId(workosId);
    try {
      await updateUserRole(workosId, { role: newRole });
      alert('Role updated successfully! The user\'s JWT will include the new role on next login.');
    } catch (err: any) {
      alert('Failed to update role: ' + err.message);
    } finally {
      setUpdatingUserId(null);
    }
  };

  const getRoleBadgeColor = (role: UserRole) => {
    switch (role) {
      case 'teacher':
        return 'bg-blue-500';
      case 'student':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (loading) {
    return <div className="p-4">Loading users...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Student & Teacher Management</h2>
      <p className="text-sm text-gray-600">
        Promote students to teachers or demote teachers to students. Role changes sync with WorkOS metadata.
      </p>

      <div className="space-y-3">
        {users.filter(u => u.role !== 'admin').map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm"
          >
            <div className="flex-1">
              <div className="font-medium">
                {user.display_name || user.first_name || user.email}
              </div>
              <div className="text-sm text-gray-500">{user.email}</div>
              <div className="text-xs text-gray-400 mt-1">
                WorkOS ID: {user.workos_id}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge className={getRoleBadgeColor(user.role)}>
                {user.role.toUpperCase()}
              </Badge>

              <div className="flex gap-2">
                {user.role !== 'student' && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleRoleUpdate(user.workos_id, 'student')}
                    disabled={updatingUserId === user.workos_id}
                  >
                    → Student
                  </Button>
                )}
                {user.role !== 'teacher' && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleRoleUpdate(user.workos_id, 'teacher')}
                    disabled={updatingUserId === user.workos_id}
                  >
                    → Teacher
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
