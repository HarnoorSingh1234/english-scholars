import { requireStudent } from '@/lib/auth';
import StudentDashboard from '@/components/student/StudentDashboard';

export default async function StudentDashboardPage() {
  await requireStudent();

  return <StudentDashboard />;
}
