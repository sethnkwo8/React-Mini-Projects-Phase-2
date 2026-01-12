import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ACTIONS } from "../../reducer/authReducer";

export function LogoutButton() {

    const { dispatch } = useAuth();
    const navigate = useNavigate();

    function logout() {
        dispatch({ type: ACTIONS.LOGOUT })
        navigate('/login', { replace: true })
    }

    return (
        <button className='py-4 px-8 rounded-lg text-white bg-blue-400 hover:bg-blue-600' onClick={logout}>Logout</button>
    )
}
