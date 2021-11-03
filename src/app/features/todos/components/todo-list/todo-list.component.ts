import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Todo } from 'src/app/shared/types/todo.type';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TodoListService,
      useClass: TodoListService,
    }
  ]
})
export class TodoListComponent implements OnInit {

  @Input()
  todos!: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
