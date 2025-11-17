import { requireTeacher } from '@/lib/auth';
import TeacherDashboard from '@/components/teacher/TeacherDashboard';

export default async function TeacherDashboardPage() {
  await requireTeacher();

  return <TeacherDashboard />;
}
