import React from "react";
import { TodoItemType } from "../types";

const TodoItem = React.memo((props: TodoItemType) => {
  return <div className="user-item">{props?.title}</div>;
});
export default TodoItem;
