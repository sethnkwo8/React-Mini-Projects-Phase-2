import React from 'react'
import { useTodos } from '../hooks/useTodos'
import { ACTIONS } from '../reducer/todoReducer';

export const TodoItem = React.memo(function TodoItem({ id, title, description, completed }) {

    const { dispatch } = useTodos();

    function toggleCompleted() {
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id })
    }

    function deleteTask() {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: id })
    }
    return (
        <div className="task-card">
            <div>
                <input checked={completed} onChange={toggleCompleted} type="checkbox" />
            </div>
            <div>
                <p className='font-bold text-2xl'>{title}</p>
                <p className='text-base'>{description}</p>
            </div>
            <div>
                <button className='deleteBtn' onClick={deleteTask}>Delete</button>
            </div>
        </div>
    )
})
