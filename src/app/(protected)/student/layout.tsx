import { verifyRole } from '@/lib/auth';

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await verifyRole(['student']); // Redirects if not authorized

  return <>{children}</>;
}
