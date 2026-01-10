import { useAuth } from "../hooks/useAuth";
import { ACTIONS } from "../reducer/authReducer";

export function LogoutButton() {

    const { state, dispatch } = useAuth();

    function logout() {
        dispatch({ type: ACTIONS.LOGOUT })
    }

    return (
        <button className='py-4 px-8 rounded-lg text-white bg-blue-400 hover:bg-blue-600' onClick={logout}>Logout</button>
    )
}
