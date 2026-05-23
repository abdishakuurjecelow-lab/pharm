
//New-----------------------------

// import { createContext, useContext, useEffect, useState } from "react";
// import api from "../api/client";

// const AuthCtx = createContext(null);
// export const useAuth = () => useContext(AuthCtx);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [ready, setReady] = useState(false);

//   // Boot: haddii token jiro, xaqiiji
//   useEffect(() => {
//     (async () => {
//       try {
//         const t = localStorage.getItem("token");
//         if (!t) { setReady(true); return; }
//         const { data } = await api.get("/auth/me");
//         setUser(data.user);
//       } catch {
//         localStorage.removeItem("token");
//         setUser(null);
//       } finally {
//         setReady(true);
//       }
//     })();
//   }, []);

//   async function login(email, password) {
//     const { data } = await api.post("/auth/login", { email, password });
//     localStorage.setItem("token", data.token);
//     setUser(data.user);
//     return data.user;
//   }

//   async function signup(name, email, password) {
//     const { data } = await api.post("/auth/signup", { name, email, password });
//     localStorage.setItem("token", data.token);
//     setUser(data.user);
//     return data.user;
//   }

//   function logout() {
//     localStorage.removeItem("token");
//     setUser(null);
//   }

//   return (
//     <AuthCtx.Provider value={{ user, ready, login, signup, logout }}>
//       {children}
//     </AuthCtx.Provider>
//   );
// }




import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/client";

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  // ❗ IMPORTANT: mar kasta oo page la reload gareeyo → logout samee
  useEffect(() => {
    localStorage.removeItem("token"); // 🔥 this is the fix
    setUser(null);
    setReady(true);
  }, []);

  async function login(email, password) {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    setUser(data.user);
    return data.user;
  }

  async function signup(name, email, password) {
    const { data } = await api.post("/auth/signup", { name, email, password });
    localStorage.setItem("token", data.token);
    setUser(data.user);
    return data.user;
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthCtx.Provider value={{ user, ready, login, signup, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}