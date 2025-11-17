import { verifyRole } from '@/lib/auth';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await verifyRole(['admin']); // Redirects if not authorized

  return <>{children}</>;
}
