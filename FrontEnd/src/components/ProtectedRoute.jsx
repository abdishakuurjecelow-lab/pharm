import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function ProtectedRoute({ roles, children }) {
  const { user, ready } = useAuth();
  const location = useLocation();

  if (!ready) {
    return (
      <div className="grid min-h-[40vh] place-items-center text-slate-500">
        Loading…
      </div>
    );
  }

  // hadduu user maqan yahay -> login u dir adigoo wadanaya halka uu rabay
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />;

  if (roles?.length && !roles.includes(user.role)) return <Navigate to="/" replace />;
  return children || <Outlet />;
}
