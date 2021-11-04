import { Todo } from "../types/todo.type";

export function markAsCompleted(todo: Todo): Todo {
  todo.isCompleted = true;
  return todo;
}
