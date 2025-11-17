// Passage Types

export type SectionType = 'reading' | 'writing' | 'listening' | 'speaking';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface Passage {
  id: string;
  title: string;
  section_type: SectionType;
  difficulty: DifficultyLevel;
  content: string;
  instructions: string | null;
  word_count: number | null;
  time_limit_minutes: number | null;
  tags: string[];
  topic_category: string | null;
  is_active: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface PassageCreate {
  title: string;
  section_type: SectionType;
  difficulty: DifficultyLevel;
  content: string;
  instructions?: string;
  word_count?: number;
  time_limit_minutes?: number;
  tags?: string[];
  topic_category?: string;
  is_active?: boolean;
}

export interface PassageUpdate {
  title?: string;
  section_type?: SectionType;
  difficulty?: DifficultyLevel;
  content?: string;
  instructions?: string;
  word_count?: number;
  time_limit_minutes?: number;
  tags?: string[];
  topic_category?: string;
  is_active?: boolean;
}

export interface PassageListResponse {
  passages: Passage[];
  total: number;
  page: number;
  limit: number;
}

export interface PassageFilters {
  section_type?: SectionType;
  difficulty?: DifficultyLevel;
  is_active?: boolean;
  search?: string;
  tags?: string[];
  page?: number;
  limit?: number;
}
