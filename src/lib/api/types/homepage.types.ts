// Homepage Types (for authenticated users)

export interface DashboardStats {
  totalTests: number;
  completedTests: number;
  averageScore: number;
  upcomingTests: number;
}

export interface RecentActivity {
  id: string;
  type: 'test' | 'assignment' | 'lesson';
  title: string;
  date: string;
  status: 'completed' | 'in-progress' | 'pending';
  score?: number;
}

export interface UpcomingTest {
  id: string;
  title: string;
  date: string;
  duration: number;
  type: string;
}

export interface HomepageData {
  stats: DashboardStats;
  recentActivity: RecentActivity[];
  upcomingTests: UpcomingTest[];
  announcements: Array<{
    id: string;
    title: string;
    message: string;
    date: string;
    priority: 'high' | 'medium' | 'low';
  }>;
}
