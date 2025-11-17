// Question Types

export type QuestionType = 
  | 'multiple_choice' 
  | 'true_false_not_given' 
  | 'matching_headings' 
  | 'fill_in_blanks' 
  | 'short_answer' 
  | 'essay' 
  | 'letter' 
  | 'speaking_response';

export interface Question {
  id: string;
  passage_id: string;
  question_number: number;
  question_type: QuestionType;
  question_text: string;
  options: string[];
  correct_answer: string | null;
  points: number;
  grading_rubric: Record<string, any>;
  created_at: string;
}

export interface QuestionCreate {
  question_number: number;
  question_type: QuestionType;
  question_text: string;
  options?: string[];
  correct_answer?: string;
  points?: number;
  grading_rubric?: Record<string, any>;
}

export interface QuestionUpdate {
  question_number?: number;
  question_type?: QuestionType;
  question_text?: string;
  options?: string[];
  correct_answer?: string;
  points?: number;
  grading_rubric?: Record<string, any>;
}

export interface QuestionBulkCreate {
  questions: QuestionCreate[];
}
