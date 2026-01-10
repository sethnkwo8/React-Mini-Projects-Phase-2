import { useAuth } from "../hooks/useAuth"

export function Profile() {
    const { state, dispatch } = useAuth()
    return (
        <div>Profile</div>
    )
}
