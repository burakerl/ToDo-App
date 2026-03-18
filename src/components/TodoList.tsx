import { FaTimes } from "react-icons/fa";

interface TodoListProps {
  todo: string;
  onDelete: () => void;
  onToggleDone: () => void;
  todoDone?: boolean;
}
const TodoList = ({ todo, onDelete, onToggleDone, todoDone }: TodoListProps) => {
  return (
    <div
      className={`todo-div ${!todoDone ? "not-done" : "done"}`}
      onClick={onToggleDone}
    >
      <h3>
        {todo} <FaTimes onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }} />
      </h3>
    </div>
  );
};

export default TodoList;
