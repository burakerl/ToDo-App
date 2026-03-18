import Search from "./components/Search";
import Add from "./components/Add";
import TodoList from "./components/TodoList";
import "./App.css";
import { useState } from "react";

function App() {
  type Todo = {
    text: string;
    done: boolean;
  };
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState("");

  const addTodo = (text: string) => {
    setTodos([...todos, { text, done: false }]);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((todo) => todos.indexOf(todo) !== index));
  };

  const toggleDone = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="main-content">
        <Add addTodo={addTodo} />
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase()),
          )
          .map((todo, index) => (
            <TodoList
              todo={todo.text}
              key={index}
              onDelete={() => deleteTodo(index)}
              onToggleDone={() => toggleDone(index)}
              todoDone={todo.done}
            />
          ))}
      </div>
    </>
  );
}

export default App;
