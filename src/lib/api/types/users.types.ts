// User Types

export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  workos_id: string;
  email: string;
  role: UserRole;
  first_name: string | null;
  last_name: string | null;
  display_name: string | null;
  phone_number: string | null;
  address_line1: string | null;
  address_line2: string | null;
  city: string | null;
  state: string | null;
  postal_code: string | null;
  country: string | null;
  notes: string | null;
  avatar_url: string | null;
  avatar_key: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserProfileUpdate {
  first_name?: string;
  last_name?: string;
  display_name?: string;
  phone_number?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
}

export interface AvatarUploadResponse {
  key: string;
  upload: Record<string, any>;
  cdn_url: string;
}

export interface UserRoleUpdate {
  role: UserRole;
}

export interface UserRoleUpdateResponse {
  success: boolean;
  message: string;
  user: User;
}
