import { AuthPage } from "./projects/project-2-authstateapp/pages/AuthPage"
import Profilepage from "./projects/project-2-authstateapp/pages/Profilepage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./projects/project-2-authstateapp/contexts/AuthProvider"
import { ProtectedRoute } from "./projects/project-2-authstateapp/components/ProtectedRoute"

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<AuthPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />} >
            <Route path="/profile" element={<Profilepage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
