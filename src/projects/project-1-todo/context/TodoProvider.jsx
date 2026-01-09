import { useReducer } from "react"
import { TodoContext } from "./TodoContext";
import { todoReducer, initialValue } from "../reducer/todoReducer";


export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialValue);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}
