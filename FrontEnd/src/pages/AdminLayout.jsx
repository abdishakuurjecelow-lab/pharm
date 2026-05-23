// src/pages/AdminLayout.jsx
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FiHome, FiBox, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../store/auth";

export default function AdminLayout() {
  const [open, setOpen] = useState(true);
  const { logout } = useAuth();
  const nav = useNavigate();

  const menus = [
    { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
    { name: "Products", path: "/dashboard/products", icon: <FiBox /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-64" : "w-20"
        } bg-gradient-to-b from-slate-800 to-slate-900 text-white p-4 duration-300 relative`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-3 top-6 rounded-full bg-slate-700 p-1 text-white"
        >
          ☰
        </button>

        <h1
          className={`font-bold text-lg text-center mb-10 transition ${
            !open && "scale-0"
          }`}
        >
          Admin Panel
        </h1>

        <ul className="space-y-2">
          {menus.map((m) => (
            <li key={m.name}>
              <Link
                to={m.path}
                className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-700 transition"
              >
                {m.icon}
                <span className={`${!open && "hidden"} transition`}>
                  {m.name}
                </span>
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={() => {
                logout();
                nav("/login", { replace: true });
              }}
              className="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-rose-600 transition"
            >
              <FiLogOut />
              <span className={`${!open && "hidden"} transition`}>Logout</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
