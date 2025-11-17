// Contact Form Types

export interface ContactFormSubmission {
  id: string;
  full_name: string;
  phone_number: string;
  email: string;
  preferred_course: string | null;
  is_contacted: boolean;
  contacted_by: string | null;
  contacted_at: string | null;
  notes: string | null;
  created_at: string;
}

export interface ContactFormSubmit {
  full_name: string;
  phone_number: string;
  email: string;
  preferred_course?: string;
}

export interface ContactFormUpdate {
  is_contacted?: boolean;
  notes?: string;
}

export interface ContactFormListResponse {
  submissions: ContactFormSubmission[];
  total: number;
  page: number;
  limit: number;
}

export interface ContactFormFilters {
  is_contacted?: boolean;
  preferred_course?: string;
  search?: string;
  start_date?: string;
  page?: number;
  limit?: number;
}

export interface ContactFormStatistics {
  total_submissions: number;
  by_course: Record<string, number>;
  contacted_count: number;
  pending_count: number;
}
