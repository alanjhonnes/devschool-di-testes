import { Component, OnInit, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import { Todo } from 'src/app/shared/types/todo.type';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  @Input()
  todo!: Todo;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  @HostListener('click')
  markAsCompleted() {
    this.todoListService.markAsCompleted(this.todo);
  }

}
