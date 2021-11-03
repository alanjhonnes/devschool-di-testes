import { Injectable } from '@angular/core';
import { Todo } from './types/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [
    {
      id: '1',
      task: 'Aula DI',
      isCompleted: false,
    }
  ];

  constructor() {
    console.log('construtor todos service');
  }

  getTodos() {
    return this.todos;
  }

  addTodo(task: string) {
    this.todos.push({
      id: (this.todos.length + 1).toString(),
      task: task,
      isCompleted: false,
    });
    return [...this.todos];
  }

  toggleTodo(todo: Todo): Todo {
    todo.isCompleted = !todo.isCompleted;
    return todo;
  }
}
