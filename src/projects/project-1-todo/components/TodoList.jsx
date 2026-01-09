import { useMemo } from "react";
import { useTodos } from "../hooks/useTodos"
import { TodoItem } from "./TodoItem";

export function TodoList({ onAdd }) {
    const { state } = useTodos();

    const tasksItems = state.todos.map(todo =>
        <TodoItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} />
    )

    const totalTasks = state.todos.length;
    const tasksCompleted = useMemo(() => {
        return state.todos.filter(todo =>
            todo.completed
        )
    }, [state.todos])

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className=' p-4 flex flex-col justify-center items-center w-full md:w-3/4 rounded-lg border border-black space-y-4'>
                <button className='mx-24 self-end rounded-lg py-4 px-8 text-white bg-blue-400 hover:bg-blue-600 hover:scale-105 transition-all ease-in-out duration-300' onClick={onAdd}>Add Task</button>
                <h1 className='p-2 text-center font-bold text-2xl md:text-3xl'>My Tasks</h1>
                <p>Tasks Completed : {tasksCompleted.length} / {totalTasks}</p>
                <div className='w-full'>
                    {tasksItems}
                </div>
            </div>
        </div>
    )
}
