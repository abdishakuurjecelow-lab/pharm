// import { useState, createContext, useContext } from "react";
// import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";

// const SearchCtx = createContext("");
// export const useSearch = () => useContext(SearchCtx);

// const I = {
//   menu: "M4 6h16M4 12h16M4 18h16",
//   dash: "M3 12h7V3H3v9zm0 9h7v-7H3v7zm11 0h7v-9h-7v9zm0-18v7h7V3h-7z",
//   products: "M4 7l8-4 8 4-8 4-8-4zm0 4l8 4 8-4M4 7v10l8 4 8-4V7",
//   add: "M12 5v14m7-7H5",
//   logout: "M15 17l5-5-5-5M20 12H9m4 7v1a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h5a2 2 0 012 2v1",
//   search: "M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z",
// };
// const Path = ({ d, className = "w-7 h-7" }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="none">
//     <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// export default function DashboardLayout() {
//   const [drawer, setDrawer] = useState(false);
//   const [query, setQuery] = useState("");
//   const { logout } = useAuth();
//   const nav = useNavigate();
//   const { pathname } = useLocation();

//   const linkBase = "flex items-center gap-3 rounded-xl px-3 py-2 text-[16px] font-semibold";
//   const active = "bg-white/15 text-white ring-1 ring-white/20";
//   const idle = "text-white/80 hover:bg-white/10 hover:text-white";

//   return (
//     <SearchCtx.Provider value={query}>
//       <div className="min-h-screen bg-slate-50">
//         <aside className="fixed left-0 top-0 hidden h-full w-72 bg-[linear-gradient(180deg,#0ea5b7_0%,#059669_100%)] text-white shadow-2xl sm:block">
//           <div className="px-5 pt-6">
//             <div className="flex items-center gap-3">
//               <div className="h-10 w-10 rounded-2xl bg-white/15 ring-1 ring-white/25 grid place-items-center">
//                 <span className="font-black text-xl">A</span>
//               </div>
//               <p className="text-xl font-extrabold tracking-wide">Admin Panel</p>
//             </div>

//             <div className="mt-6 space-y-1">
//               <NavLink to="/dashboard" end className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>
//                 <Path d={I.dash} /><span>Dashboard</span>
//               </NavLink>
//               <NavLink to="/dashboard/products" className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>
//                 <Path d={I.products} /><span>Products</span>
//               </NavLink>
//               <NavLink to="/dashboard/select-type" className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>
//                 <Path d={I.add} /><span>Add Product</span>
//               </NavLink>

//               <button
//                 onClick={() => { logout(); nav("/login", { replace: true }); }}
//                 className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-rose-50/90 hover:bg-rose-50/10 hover:text-white"
//               >
//                 <Path d={I.logout} /><span>Logout</span>
//               </button>
//             </div>
//           </div>
//         </aside>

//         {/* Top bar with Search */}
//         <div className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur sm:ml-72 sm:px-8">
//           <button onClick={() => setDrawer(true)} className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 sm:hidden">
//             <Path d={I.menu} className="w-7 h-7" />
//           </button>

//           <div className="hidden items-center gap-3 sm:flex">
//             <div className="relative">
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="w-72 rounded-xl border border-slate-200 bg-white px-3 py-2 pl-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 placeholder="Search products…"
//               />
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
//                 <Path d={I.search} className="w-5 h-5" />
//               </span>
//             </div>
//             <Link to="/dashboard/add-product" className="rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow hover:brightness-110">+ New</Link>
//           </div>
//         </div>

//         <main className="mx-auto max-w-7xl px-4 py-8 sm:ml-72 sm:px-8">
//           <Outlet />
//         </main>

//         <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-slate-200 bg-white/95 backdrop-blur sm:hidden">
//           <Tab to="/dashboard" label="Dashboard" icon={<Path d={I.dash} />} active={pathname==="/dashboard"} />
//           <Tab to="/dashboard/products" label="Products" icon={<Path d={I.products} />} active={pathname.includes("/dashboard/products")} />
//           <Tab to="/dashboard/add-product" label="Add" icon={<Path d={I.add} />} active={pathname.includes("/dashboard/add-product")} />
//         </nav>
//       </div>
//     </SearchCtx.Provider>
//   );
// }

// function Tab({ to, label, icon, active }) {
//   return (
//     <Link to={to} className={`flex flex-col items-center gap-1 py-2 text-xs font-semibold ${active ? "text-teal-700" : "text-slate-500"}`}>
//       <span className={`grid h-8 w-12 place-items-center rounded-xl ${active ? "bg-teal-50 ring-1 ring-teal-200" : ""}`}>{icon}</span>
//       {label}
//     </Link>
//   );
// }


//++++++++++++++++++++++++++++++++++++++


// import { useState, createContext, useContext } from "react";
// import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";

// const SearchCtx = createContext("");
// export const useSearch = () => useContext(SearchCtx);

// const I = {
//   menu: "M4 6h16M4 12h16M4 18h16",
//   dash: "M3 12h7V3H3v9zm0 9h7v-7H3v7zm11 0h7v-9h-7v9zm0-18v7h7V3h-7z",
//   products: "M4 7l8-4 8 4-8 4-8-4zm0 4l8 4 8-4M4 7v10l8 4 8-4V7",
//   add: "M12 5v14m7-7H5",
//   logout: "M15 17l5-5-5-5M20 12H9m4 7v1a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h5a2 2 0 012 2v1",
//   search: "M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z",
// };

// const Path = ({ d, className = "w-7 h-7" }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="none">
//     <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// export default function DashboardLayout() {
//   const [query, setQuery] = useState("");
//   const { logout } = useAuth();
//   const nav = useNavigate();
//   const { pathname } = useLocation();

//   const linkBase = "flex items-center gap-3 rounded-xl px-3 py-2 text-[16px] font-semibold";
//   const active = "bg-white/15 text-white ring-1 ring-white/20";
//   const idle = "text-white/80 hover:bg-white/10 hover:text-white";

//   return (
//     <SearchCtx.Provider value={query}>
//       <div className="min-h-screen bg-slate-50">

//         {/* SIDEBAR */}
//         <aside className="fixed left-0 top-0 hidden h-full w-72 bg-gradient-to-b from-teal-600 to-emerald-600 text-white shadow-2xl sm:block">
//           <div className="px-5 pt-6">

//             <div className="flex items-center gap-3">
//               <div className="h-10 w-10 rounded-2xl bg-white/15 grid place-items-center">
//                 <span className="font-black text-xl">A</span>
//               </div>
//               <p className="text-xl font-extrabold">Admin Panel</p>
//             </div>

//             <div className="mt-6 space-y-1">

//               <NavLink to="/dashboard" end className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>
//                 <Path d={I.dash} /><span>Dashboard</span>
//               </NavLink>

//               <NavLink to="/dashboard/products" className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>
//                 <Path d={I.products} /><span>Products</span>
//               </NavLink>

//               {/* 🔥 SAX */}
//               <NavLink to="/dashboard/add-product" className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>
//                 <Path d={I.add} /><span>Add Product</span>
//               </NavLink>

//               <button
//                 onClick={() => { logout(); nav("/login", { replace: true }); }}
//                 className="mt-3 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-rose-50/90 hover:bg-rose-50/10 hover:text-white"
//               >
//                 <Path d={I.logout} /><span>Logout</span>
//               </button>

//             </div>
//           </div>
//         </aside>

//         {/* TOP BAR */}
//         <div className="sticky top-0 z-30 flex items-center justify-between border-b bg-white px-4 py-3 sm:ml-72 sm:px-8">

//           <div className="hidden items-center gap-3 sm:flex">
//             <div className="relative">
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="w-72 rounded-xl border px-3 py-2 pl-10 text-sm focus:ring-2 focus:ring-teal-400"
//                 placeholder="Search products..."
//               />
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
//                 <Path d={I.search} className="w-5 h-5" />
//               </span>
//             </div>

//             {/* 🔥 SAX */}
//             <Link
//               to="/dashboard/add-product"
//               className="rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
//             >
//               + New
//             </Link>
//           </div>
//         </div>

//         {/* MAIN */}
//         <main className="mx-auto max-w-7xl px-4 py-8 sm:ml-72 sm:px-8">
//           <Outlet />
//         </main>

//         {/* MOBILE NAV */}
//         <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t bg-white sm:hidden">
//           <Tab to="/dashboard" label="Dashboard" icon={<Path d={I.dash} />} active={pathname==="/dashboard"} />
//           <Tab to="/dashboard/products" label="Products" icon={<Path d={I.products} />} active={pathname.includes("/dashboard/products")} />
//           <Tab to="/dashboard/add-product" label="Add" icon={<Path d={I.add} />} active={pathname.includes("/dashboard/add-product")} />
//         </nav>

//       </div>
//     </SearchCtx.Provider>
//   );
// }

// function Tab({ to, label, icon, active }) {
//   return (
//     <Link to={to} className={`flex flex-col items-center gap-1 py-2 text-xs font-semibold ${active ? "text-teal-700" : "text-slate-500"}`}>
//       <span className={`grid h-8 w-12 place-items-center rounded-xl ${active ? "bg-teal-50 ring-1 ring-teal-200" : ""}`}>
//         {icon}
//       </span>
//       {label}
//     </Link>
//   );
// }


//+++++++++++++++++++++++++++++++

// import { useState, createContext, useContext, useEffect } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import { Sun, Moon } from "lucide-react";

// /* ✅ SEARCH CONTEXT */
// const SearchCtx = createContext("");
// export const useSearch = () => useContext(SearchCtx);

// export default function DashboardLayout() {
//   const { logout } = useAuth();
//   const nav = useNavigate();

//   const [query, setQuery] = useState("");
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved === "dark") {
//       document.documentElement.classList.add("dark");
//       setDark(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (dark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setDark(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setDark(true);
//     }
//   };

//   return (
//     <SearchCtx.Provider value={query}>
//       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

//         {/* SIDEBAR */}
//         <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-teal-600 to-emerald-600 text-white p-6">
//           <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

//           <NavLink to="/dashboard" className="block py-2">Dashboard</NavLink>
//           <NavLink to="/dashboard/products" className="block py-2">Products</NavLink>
//           <NavLink to="/dashboard/add-product" className="block py-2">Add Product</NavLink>

//           <button
//             onClick={() => {
//               logout();
//               nav("/login");
//             }}
//             className="mt-6"
//           >
//             Logout
//           </button>
//         </aside>

//         {/* TOP BAR */}
//         <div className="ml-64 p-6 border-b bg-white dark:bg-slate-800 transition-colors">
//           <div className="flex justify-between items-center">

//             <input
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="border px-4 py-2 rounded-xl bg-white dark:bg-slate-700 dark:text-white"
//               placeholder="Search..."
//             />

//             <button
//               onClick={toggleTheme}
//               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 dark:text-white transition"
//             >
//               {dark ? <Sun size={18} /> : <Moon size={18} />}
//               {dark ? "Light Mode" : "Dark Mode"}
//             </button>

//           </div>
//         </div>

//         {/* CONTENT */}
//         <main className="ml-64 p-8 text-slate-900 dark:text-white transition-colors">
//           <Outlet />
//         </main>

//       </div>
//     </SearchCtx.Provider>
//   );
// }





//============================

// import { useState, useEffect, createContext, useContext } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import { Sun, Moon } from "lucide-react";
// import { motion } from "framer-motion";

// /* SEARCH CONTEXT */
// const SearchCtx = createContext("");
// export const useSearch = () => useContext(SearchCtx);

// export default function DashboardLayout() {
//   const { logout } = useAuth();
//   const nav = useNavigate();

//   const [query, setQuery] = useState("");
//   const [dark, setDark] = useState(false);

//   /* INIT THEME */
//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved === "dark") {
//       document.documentElement.classList.add("dark");
//       setDark(true);
//     } else {
//       document.documentElement.classList.remove("dark");
//       setDark(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (document.documentElement.classList.contains("dark")) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setDark(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setDark(true);
//     }
//   };

//   const linkStyle =
//     "block px-4 py-2 rounded-xl font-semibold transition-all duration-200 hover:bg-teal-700 dark:hover:bg-teal-800 hover:text-white";

//   return (
//     <SearchCtx.Provider value={query}>
//       <motion.div
//         className="min-h-screen flex transition-all duration-300"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >

//         {/* SIDEBAR */}
//         <motion.aside
//           className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-teal-600 to-emerald-600 text-white p-6 transition-all duration-300"
//           initial={{ x: -200 }}
//           animate={{ x: 0 }}
//           transition={{ type: "spring", stiffness: 100, damping: 25 }}
//         >
//           <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

//           <NavLink to="/dashboard" className={linkStyle}>
//             Dashboard
//           </NavLink>

//           <NavLink to="/dashboard/products" className={linkStyle}>
//             Products
//           </NavLink>

//           <NavLink to="/dashboard/add-product" className={linkStyle}>
//             Add Product
//           </NavLink>

//           <motion.button
//             onClick={() => {
//               logout();
//               nav("/login");
//             }}
//             className="mt-6 w-full py-2 rounded-xl bg-rose-600 text-white hover:bg-rose-700"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Logout
//           </motion.button>
//         </motion.aside>

//         {/* MAIN CONTENT */}
//         <div className="flex-1 ml-64">
//           {/* TOP BAR */}
//           <motion.div
//             className="p-6 border-b bg-white dark:bg-slate-900 transition-colors duration-300"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.1 }}
//           >
//             <div className="flex justify-between items-center">

//               {/* SEARCH INPUT */}
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="border px-4 py-2 rounded-xl bg-white dark:bg-slate-800 dark:text-white transition"
//                 placeholder="Search..."
//               />

//               {/* DARK/LIGHT TOGGLE */}
//               <button
//                 onClick={toggleTheme}
//                 className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 dark:text-white transition"
//               >
//                 {dark ? <Sun size={18} /> : <Moon size={18} />}
//                 {dark ? "Light Mode" : "Dark Mode"}
//               </button>
//             </div>
//           </motion.div>

//           {/* CONTENT */}
//           <main className="p-8 transition-all duration-300">
//             <Outlet />
//           </main>

//         </div>
//       </motion.div>
//     </SearchCtx.Provider>
//   );
// }


// import { useState, useEffect, createContext, useContext } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import { Sun, Moon } from "lucide-react";

// /* SEARCH CONTEXT */
// const SearchCtx = createContext("");
// export const useSearch = () => useContext(SearchCtx);

// export default function DashboardLayout() {
//   const { logout } = useAuth();
//   const nav = useNavigate();

//   const [dark, setDark] = useState(false);

//   /* INIT THEME */
//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved === "dark") {
//       document.documentElement.classList.add("dark");
//       setDark(true);
//     } else {
//       document.documentElement.classList.remove("dark");
//       setDark(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (document.documentElement.classList.contains("dark")) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setDark(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setDark(true);
//     }
//   };

//   const linkStyle =
//     "block px-4 py-2 rounded-xl font-semibold transition-colors duration-200 hover:bg-white/20";

//   return (
//     <SearchCtx.Provider value="">
//       <div className="min-h-screen">
//         {/* SIDEBAR */}
//         <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-teal-600 to-emerald-600 text-white p-6">
//           <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

//           <NavLink to="/dashboard" className={linkStyle}>
//             Dashboard
//           </NavLink>

//           <NavLink to="/dashboard/products" className={linkStyle}>
//             Products
//           </NavLink>

//           <NavLink to="/dashboard/add-product" className={linkStyle}>
//             Add Product
//           </NavLink>

//           <button
//             onClick={() => {
//               logout();
//               nav("/login");
//             }}
//             className="mt-6"
//           >
//             Logout
//           </button>
//         </aside>

//         {/* TOP BAR */}
//         <div className="ml-64 p-6 border-b bg-white dark:bg-slate-900 transition-colors duration-300">
//           <div className="flex justify-between items-center">
//             <button
//               onClick={toggleTheme}
//               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 dark:text-white transition"
//             >
//               {dark ? <Sun size={18} /> : <Moon size={18} />}
//               {dark ? "Light Mode" : "Dark Mode"}
//             </button>
//           </div>
//         </div>

//         {/* CONTENT */}
//         <main className="ml-64 p-8 transition-colors duration-300">
//           <Outlet />
//         </main>
//       </div>
//     </SearchCtx.Provider>
//   );
// }

//New------------------------


// import { createContext, useContext } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";

// /* SEARCH CONTEXT */
// const SearchCtx = createContext("");
// export const useSearch = () => useContext(SearchCtx);

// export default function DashboardLayout() {
//   const { logout } = useAuth();
//   const nav = useNavigate();

//   const linkStyle =
//     "block px-4 py-2 rounded-xl font-semibold transition-colors duration-200 hover:bg-white/20";

//   return (
//     <SearchCtx.Provider value="">
//       <div className="min-h-screen">
//         {/* SIDEBAR */}
//         <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-teal-600 to-emerald-600 text-white p-6">
//           <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

//           <NavLink to="/dashboard" className={linkStyle}>
//             Dashboard
//           </NavLink>

//           <NavLink to="/dashboard/products" className={linkStyle}>
//             Products
//           </NavLink>

//           <NavLink to="/dashboard/add-product" className={linkStyle}>
//             Add Product
//           </NavLink>

//           <button
//             onClick={() => {
//               logout();
//               nav("/login");
//             }}
//             className="mt-6"
//           >
//             Logout
//           </button>
//         </aside>

//         {/* TOP BAR */}
//         <div className="ml-64 p-6 border-b bg-white transition-colors duration-300">
//           <div className="flex justify-between items-center">
//             <div />
//           </div>
//         </div>

//         {/* CONTENT */}
//         <main className="ml-64 p-8 transition-colors duration-300">
//           <Outlet />
//         </main>
//       </div>
//     </SearchCtx.Provider>
//   );
// }



import { createContext, useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { LayoutDashboard, Package2, PlusSquare, LogOut } from "lucide-react";

/* SEARCH CONTEXT */
const SearchCtx = createContext("");
export const useSearch = () => useContext(SearchCtx);

export default function DashboardLayout() {
  const { logout } = useAuth();
  const nav = useNavigate();

  const navItemClass = ({ isActive }) =>
    `group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
      isActive
        ? "bg-white text-emerald-700 shadow-sm"
        : "text-white/90 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <SearchCtx.Provider value="">
      <div className="min-h-screen bg-slate-50">
        {/* SIDEBAR */}
        <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-teal-600 via-emerald-600 to-green-600 text-white p-6 shadow-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tight">Admin Panel</h1>
            <p className="mt-2 text-sm text-white/80">
              AL-Ain Dashboard
            </p>
          </div>

          <div className="space-y-2">
            <NavLink to="/kaalay" end className={navItemClass}>
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>

            <NavLink to="/kaalay/products" className={navItemClass}>
              <Package2 size={18} />
              Products
            </NavLink>

            <NavLink to="/kaalay/add-product" className={navItemClass}>
              <PlusSquare size={18} />
              Add Product
            </NavLink>
          </div>

          <div className="mt-8 border-t border-white/15 pt-6">
            <button
              onClick={() => {
                logout();
                nav("/soogeli");
              }}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* TOP BAR */}
        <div className="ml-64 border-b border-slate-200 bg-white/95 px-8 py-5 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Welcome back
              </h2>
              <p className="text-sm text-slate-500">
                Manage your pharmaceutical inventory professionally
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <main className="ml-64 p-8">
          <Outlet />
        </main>
      </div>
    </SearchCtx.Provider>
  );
}
