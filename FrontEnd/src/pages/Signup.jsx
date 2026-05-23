import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr(""); setLoading(true);
    try {
      const u = await signup(name, email, password);
      nav(u?.role === "admin" ? "/kaalay" : "/", { replace: true });
    } catch (e) {
      setErr(e?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[92vh] bg-gradient-to-b from-slate-50 to-white px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-center text-4xl font-extrabold
        bg-[linear-gradient(90deg,#f97316_0%,#d97706_18%,#16a34a_48%,#0d9488_72%,#06b6d4_100%)]
        bg-clip-text text-transparent">Signup</h1>

        <div className="mx-auto w-full max-w-md animate-[slideIn_.45s_ease]">
          <form onSubmit={submit}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg backdrop-blur">
            <p className="mb-4 text-center text-sm text-slate-500">
              Create your admin account
            </p>

            {err && (
              <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                {err}
              </div>
            )}

            <label className="block text-sm text-slate-600">Name</label>
            <input
              className="mt-1 mb-3 w-full rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="block text-sm text-slate-600">Email</label>
            <input
              type="email"
              className="mt-1 mb-3 w-full rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="block text-sm text-slate-600">Password</label>
            <input
              type="password"
              className="mt-1 mb-5 w-full rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              disabled={loading}
              className="w-full rounded-xl bg-teal-600 py-2.5 font-semibold text-white shadow transition hover:bg-teal-700 disabled:opacity-60"
            >
              {loading ? "Creating…" : "Create account"}
            </button>

            <p className="mt-4 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link to="/soogeli" className="font-semibold text-teal-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
