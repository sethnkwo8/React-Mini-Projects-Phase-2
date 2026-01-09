import { useReducer } from "react";

export const initialValue = {
    todos: []
}

export const ACTIONS = {
    ADD_TODO: 'add',
    TOGGLE_TODO: 'toggle',
    DELETE_TODO: 'delete'
}

export function todoReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        case ACTIONS.TOGGLE_TODO:
            return {
                ...state, todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            }
        case ACTIONS.DELETE_TODO:
            return {
                ...state, todos: state.todos.filter(todo =>
                    todo.id !== action.payload
                )
            }
        default:
            return state;
    }
}
