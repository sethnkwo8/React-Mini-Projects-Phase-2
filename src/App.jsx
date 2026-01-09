import { TodoProvider } from "./projects/project-1-todo/context/TodoProvider"
import TodoForm from "./projects/project-1-todo/components/TodoForm"

export default function App() {
  return (
    <TodoProvider>
      <TodoForm />
    </TodoProvider>
  )
}
