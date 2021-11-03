import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/types/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {



  constructor() {
    console.log('construtor todo list service');
   }

  markAsCompleted(todo: Todo) {
    todo.isCompleted = true;
  }

  markAsUnfinished(todo: Todo) {
    todo.isCompleted = false;
  }
}
