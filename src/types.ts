export interface TodoItemType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoListProps {
  todoList?: TodoItemType[];
}
