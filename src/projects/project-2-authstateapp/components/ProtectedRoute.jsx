import { useAuth } from "../hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
    const { state } = useAuth();

    if (!state.isAuthenticated) {
        return <Navigate to='/login' replace />;
    }

    return <Outlet />;
}
