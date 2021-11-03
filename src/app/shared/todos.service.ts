import { Injectable } from '@angular/core';
import { Todo } from './types/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: Todo[] = [];

  constructor() { }
}
