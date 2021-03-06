import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/shared/todos.service';
import { Todo } from 'src/app/shared/types/todo.type';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  task = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

  addTodo(): void {
    console.log('add');
    this.todos = this.todosService.addTodo(this.task);
  }

}
