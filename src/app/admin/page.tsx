import { OrdersTable } from "@/../components/admin/OrdersTable";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#08080f] p-6 lg:p-8">
      <OrdersTable />
    </div>
  );
}