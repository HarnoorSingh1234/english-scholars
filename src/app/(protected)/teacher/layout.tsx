import { verifyRole } from '@/lib/auth';

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await verifyRole(['teacher', 'admin']); // Redirects if not authorized

  return <>{children}</>;
}
