import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex bg-gray-950 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}