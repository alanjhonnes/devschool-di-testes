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
}
