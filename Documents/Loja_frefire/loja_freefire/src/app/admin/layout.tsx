import { AdminSidebar } from "@/../components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <AdminSidebar />

      <main className="ml-72 min-h-screen">
        {children}
      </main>
    </div>
  );
}