// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";

// export default function Login() {
//   const { login } = useAuth();
//   const nav = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/dashboard";

//   // ✅ New default admin email
//   const [email] = useState("admin@gmail.com");

//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [show, setShow] = useState(false);

//   async function submit(e) {
//     e.preventDefault();
//     setErr("");
//     setLoading(true);

//     try {
//       await login(email, password);
//       nav(from, { replace: true });
//     } catch (e) {
//       setErr(e?.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="min-h-[92vh] bg-gradient-to-b from-slate-50 to-white px-4 py-10">
//       <div className="mx-auto max-w-7xl">
//         <h1
//           className="mb-6 text-center text-4xl font-extrabold
//           bg-[linear-gradient(90deg,#f97316_0%,#06b6d4_100%)]
//           bg-clip-text text-transparent"
//         >
//           Login
//         </h1>

//         <div className="mx-auto w-full max-w-md">
//           <form
//             onSubmit={submit}
//             className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg backdrop-blur"
//           >
//             <p className="mb-4 text-center text-sm text-slate-500">
//               Access your admin dashboard
//             </p>

//             {err && (
//               <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
//                 {err}
//               </div>
//             )}

//             {/* Hidden Email */}
//             <input type="hidden" value={email} />

//             <div className="mb-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
//               <p className="text-xs text-slate-500">Admin Email</p>
//               <p className="font-medium text-slate-700">{email}</p>
//             </div>

//             <label className="block text-sm text-slate-600">
//               Password
//             </label>

//             <div className="relative">
//               <input
//                 type={show ? "text" : "password"}
//                 className="mt-1 mb-5 w-full rounded-xl border border-slate-200 px-3 py-2 pr-16 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter password"
//                 required
//               />

//               <button
//                 type="button"
//                 onClick={() => setShow((s) => !s)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500"
//               >
//                 {show ? "Hide" : "Show"}
//               </button>
//             </div>

//             <button
//               disabled={loading}
//               className="w-full rounded-xl bg-teal-600 py-2.5 font-semibold text-white shadow transition hover:bg-teal-700 disabled:opacity-60"
//             >
//               {loading ? "Signing in…" : "Login"}
//             </button>

//             <p className="mt-4 text-center text-sm text-slate-500">
//               No account?{" "}
//               <Link
//                 to="/signup"
//                 className="font-semibold text-teal-600 hover:underline"
//               >
//                 Create one
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }



import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../store/auth";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname?.replace(/^\/dashboard/, "/kaalay") || "/kaalay";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      await login(email, password);
      nav(from, { replace: true });
    } catch (e) {
      setErr(e?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-[92vh] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 py-10">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="mb-7 text-center">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500 text-white shadow-lg shadow-emerald-200"
            >
              <FaLock size={24} />
            </motion.div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Admin Login
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Access your admin dashboard securely
            </p>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur"
          >
            {err && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700"
              >
                {err}
              </motion.div>
            )}

            <label className="block text-sm font-semibold text-slate-700">
              Email Address
            </label>
            <div className="relative mt-2 mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <FaEnvelope size={15} />
              </span>
              <input
                type="email"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pl-11 text-slate-800 shadow-sm outline-none transition focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                required
              />
            </div>

            <label className="block text-sm font-semibold text-slate-700">
              Password
            </label>
            <div className="relative mt-2 mb-5">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <FaLock size={15} />
              </span>

              <input
                type={show ? "text" : "password"}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pl-11 pr-14 text-slate-800 shadow-sm outline-none transition focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />

              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-emerald-600"
              >
                {show ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
              </button>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 font-bold text-white shadow-lg shadow-emerald-200 transition hover:from-emerald-600 hover:to-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Login"}
            </motion.button>

           
          </motion.form>
        </motion.div>
      </div>
    </main>
  );
}
