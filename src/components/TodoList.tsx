import { TodoListProps } from "../types";
import TodoItem from "./TodoItem";

const TodoList = (props: TodoListProps) => {
  return (
    <>
      <ul>
        {(props?.todoList ?? []).map((todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
