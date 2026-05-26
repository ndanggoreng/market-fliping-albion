import {
    LayoutDashboard,
    LineChart,
    ArrowLeftRight,
    Settings,
  } from "lucide-react";
  
  export default function Sidebar() {
    const menus = [
      {
        name: "Dashboard",
        icon: <LayoutDashboard size={20} />,
      },
      {
        name: "Market",
        icon: <LineChart size={20} />,
      },
      {
        name: "Flipping",
        icon: <ArrowLeftRight size={20} />,
      },
      {
        name: "Settings",
        icon: <Settings size={20} />,
      },
    ];
  
    return (
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-4">
        <h1 className="text-2xl font-bold mb-10">
          MarketFlip
        </h1>
  
        <nav className="space-y-2">
          {menus.map((menu) => (
            <button
              key={menu.name}
              className="
                flex items-center gap-3
                w-full
                px-4 py-3
                rounded-xl
                hover:bg-gray-800
                transition
              "
            >
              {menu.icon}
              <span>{menu.name}</span>
            </button>
          ))}
        </nav>
      </aside>
    );
  }