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

const configuredApiUrl =
  import.meta.env.VITE_API_URL || "https://al-ainpharma.com";

const browserOrigin =
  typeof window !== "undefined" ? window.location.origin : "";

const isProductionBrowser =
  typeof window !== "undefined" &&
  !["localhost", "127.0.0.1"].includes(window.location.hostname);

const isLocalApi = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i.test(
  configuredApiUrl
);

export const API_URL =
  isProductionBrowser && isLocalApi ? browserOrigin : configuredApiUrl;

export const API_ORIGIN = API_URL.replace(/\/api\/?$/, "").replace(/\/$/, "");
export const uploadUrl = (filename) =>
  !filename
    ? "/placeholder.png"
    : `${API_ORIGIN}/api/image?name=${encodeURIComponent(filename)}`;
export const productImageUrl = (product) =>
  !product?.image
    ? "/placeholder.png"
    : product.imageUrl?.startsWith("/")
    ? `${API_ORIGIN}${product.imageUrl}`
    : product.imageUrl || uploadUrl(product.image);

const api = axios.create({ baseURL: `${API_ORIGIN}/api` });

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
