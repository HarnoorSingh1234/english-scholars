// Test Level Types

export interface TestLevel {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  display_order: number;
  color_code: string | null;
  is_active: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface TestLevelCreate {
  name: string;
  slug: string;
  description?: string;
  display_order?: number;
  color_code?: string;
  is_active?: boolean;
}

export interface TestLevelUpdate {
  name?: string;
  description?: string;
  display_order?: number;
  color_code?: string;
  is_active?: boolean;
}
