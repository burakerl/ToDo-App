import { useState } from "react";

const Add = ({ addTodo }: { addTodo: (text: string) => void }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    addTodo(text);
    setText("");
  };
  return (
    <div className="add-todo-area">
      <input
        type="text"
        placeholder="Add new todos..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={35}
      />
      <button className="add-todo-btn" onClick={handleAdd} >
        Add
      </button>
    </div>
  );
};

export default Add;
