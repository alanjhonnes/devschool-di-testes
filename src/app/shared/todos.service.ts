import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from './types/todo.type';
import { markAsCompleted } from './utils/todos.utils';

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

  constructor(private router: Router) {
    console.log('construtor todos service');
  }

  getTodos() {
    console.log(this.router.isActive('', true));
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

  markAsCompleted(todo: Todo): Todo {
    return markAsCompleted(todo);
  }
}
