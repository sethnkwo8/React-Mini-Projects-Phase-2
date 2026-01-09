import { TodoProvider } from "../context/TodoProvider";
import { TodoList } from "../components/TodoList";
import { useState } from "react";
import { TodoForm } from "../components/TodoForm";

export function TodoPage() {
    const [showForm, setShowForm] = useState(false);
    return (
        <TodoProvider>
            {
                showForm ? (
                    <TodoForm onDone={() => setShowForm(false)} />
                ) : (
                    <TodoList onAdd={() => setShowForm(true)} />
                )
            }
        </TodoProvider>
    )
}
