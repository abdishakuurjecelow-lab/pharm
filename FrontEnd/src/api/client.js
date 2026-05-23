// // src/api/client.js
// import axios from "axios";
// const API = import.meta.env.VITE_API_URL || "https://al-ainpharma.com";
// const api = axios.create({ baseURL: `${API}/api` }); // <— NOT /api/v1

// api.interceptors.request.use((cfg) => {
//   const t = localStorage.getItem("token");
//   if (t) cfg.headers.Authorization = `Bearer ${t}`;
//   return cfg;
// });
// export default api;


//----------------------------------


import axios from "axios";

export const API_URL =
  import.meta.env.VITE_API_URL || "https://al-ainpharma.com";

const API = API_URL.replace(/\/api\/?$/, "").replace(/\/$/, "");
const api = axios.create({ baseURL: `${API}/api` });

// Ku lifaaq token-ka haddii uu jiro
api.interceptors.request.use((cfg) => {
  const t = localStorage.getItem("token");
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg;
});

// 401 — ha redirect-gareynin halkan; u daa component-yada inay maareeyaan
api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);

export default api;
