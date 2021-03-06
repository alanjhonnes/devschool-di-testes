import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
  ]
})
export class TodosModule { }
