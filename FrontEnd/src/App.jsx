//New-----------------------------

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./store/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import DashboardProducts from "./pages/DashboardProducts";
import DashboardAddProduct from "./pages/DashboardAddProduct";

function Shell({ children }) {
  const location = useLocation();
  const isDash = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDash && <Navbar />}
      {children}
      {!isDash && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              backdropFilter: "blur(12px)",
              background: "rgba(15, 23, 42, 0.85)",
              color: "#fff",
              padding: "16px 22px",
              borderRadius: "16px",
              fontWeight: "600",
              boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
            },
          }}
        />

        <Shell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardHome />} />
              <Route path="products" element={<DashboardProducts />} />
              <Route path="add-product" element={<DashboardAddProduct />} />

              {/* HALKAN AYAA LA SAXAY */}
              <Route path="edit-product/:id" element={<DashboardAddProduct />} />
            </Route>

            <Route
              path="*"
              element={
                <div className="h-screen flex items-center justify-center text-3xl font-bold">
                  404 Not Found
                </div>
              }
            />
          </Routes>
        </Shell>
      </Router>
    </AuthProvider>
  );
}