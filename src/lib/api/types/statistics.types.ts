// Statistics & Analytics Types

export interface StudentDashboardStats {
  overall_band_score: number;
  total_tests_completed: number;
  total_tests_assigned: number;
  current_streak: number;
  last_test_date: string | null;
  last_test_score: number | null;
  section_breakdown: Record<string, number>;
  weak_areas: any[];
  improvement_rate: number;
}

export interface ChartDataset {
  label: string;
  data: number[];
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface StudentProgressResponse {
  attempts: any[];
  trend_data: ChartData;
  best_score: number;
  best_score_date: string | null;
  worst_score: number;
  worst_score_date: string | null;
  average_score: number;
  comparison_to_previous: number;
}

export interface GradingQueueItem {
  answer_id: string;
  student_id: string;
  student_name: string;
  test_title: string;
  section_type: string;
  question_text: string;
  answer_text: string;
  submitted_at: string;
  days_waiting: number;
  is_urgent: boolean;
}

export interface GradingQueueResponse {
  writing_task1: GradingQueueItem[];
  writing_task2: GradingQueueItem[];
  speaking: GradingQueueItem[];
  total_pending: number;
}

export interface TeacherDashboardStats {
  total_students: number;
  pending_grading_count: number;
  tests_assigned_this_week: number;
  tests_assigned_this_month: number;
  average_class_performance: number;
  recent_submissions: any[];
  upcoming_deadlines: any[];
  students_needing_attention: any[];
}

export interface AdminOverviewStats {
  users_by_role: Record<string, number>;
  platform_activity: Record<string, number>;
  engagement_metrics: Record<string, number>;
  content_metrics: Record<string, number>;
}

export type ProgressPeriod = 'last_7_days' | 'last_30_days' | 'last_90_days' | 'all_time';

