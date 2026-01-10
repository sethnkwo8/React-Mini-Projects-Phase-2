import { AuthProvider } from "../contexts/AuthProvider"
import { Profile } from "../features/Profile"
import { LoginForm } from "../features/LoginForm"
import { useAuth } from "../hooks/useAuth"

function AuthPageContent() {
    const { state } = useAuth();

    return (
        <>
            {state.isAuthenticated ?
                <Profile /> :
                <LoginForm />
            }
        </>
    )
}

export function AuthPage() {
    return (
        <AuthProvider>
            <AuthPageContent />
        </AuthProvider>
    )
}
