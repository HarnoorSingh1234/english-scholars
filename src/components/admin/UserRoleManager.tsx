'use client';

import { useState } from 'react';
import { useAdminUsers } from '@/lib/api';
import type { User, UserRole } from '@/lib/api/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function UserRoleManager() {
  const { users, loading, error, updateUserRole } = useAdminUsers();
  const [updatingUserId, setUpdatingUserId] = useState<string | null>(null);

  const handleRoleUpdate = async (workosId: string, newRole: UserRole) => {
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
      case 'admin':
        return 'bg-red-500';
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
      <h2 className="text-2xl font-bold">User Role Management</h2>
      <p className="text-sm text-gray-600">
        When you update a user's role, it will be stored in WorkOS user metadata and included in their JWT on next login.
      </p>

      <div className="space-y-3">
        {users.map((user) => (
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
                {user.role !== 'admin' && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleRoleUpdate(user.workos_id, 'admin')}
                    disabled={updatingUserId === user.workos_id}
                  >
                    → Admin
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
