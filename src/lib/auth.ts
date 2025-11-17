import { withAuth } from '@workos-inc/authkit-nextjs';
import { redirect } from 'next/navigation';

/**
 * Defines user roles used across the app.
 */
export type UserRole = 'student' | 'teacher' | 'admin' | 'user' | string;

/**
 * Authenticated user shape including org memberships and role.
 */
export interface AuthUser {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  role?: UserRole;
  organizationMemberships?: {
    organizationId: string;
    role: string;
  }[];
  activeOrganizationId?: string;
}

/**
 * Get the authenticated user with organization role using withAuth.
 * Returns null if no user is authenticated.
 */
export async function getAuthUser(): Promise<AuthUser | null> {
  const { user , role} = await withAuth();
  

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    role: role,
  };
}

/**
 * Verify user has required role, redirect to unauthorized if not.
 */
export async function verifyRole(allowedRoles: UserRole[]): Promise<AuthUser> {
  const user = await getAuthUser();

  

  if (!user) {
    redirect('/login');
  }

  if (!user.role || !allowedRoles.includes(user.role)) {
    redirect('/unauthorized');
  }

  return user;
}

/**
 * Check if user has a specific role.
 */
export function hasRole(user: AuthUser | null, role: UserRole): boolean {
  if (!user || !user.role) return false;
  return user.role === role;
}

/**
 * Check if user is admin.
 */
export function isAdmin(user: AuthUser | null): boolean {
  return hasRole(user, 'admin');
}

/**
 * Check if user is teacher or admin.
 */
export function isTeacherOrAdmin(user: AuthUser | null): boolean {
  if (!user || !user.role) return false;
  return user.role === 'teacher' || user.role === 'admin';
}

/**
 * Check if user is student.
 */
export function isStudent(user: AuthUser | null): boolean {
  return hasRole(user, 'student');
}
