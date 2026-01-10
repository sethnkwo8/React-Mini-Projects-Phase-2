import { useReducer } from "react"
import { authReducer, initialValue } from "../reducer/authReducer"
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {

    const [state, dispatch] = useReducer(authReducer, initialValue);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
