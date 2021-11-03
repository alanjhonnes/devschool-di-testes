import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'di',
  },
  { path: 'di', loadChildren: () => import('./features/di/di.module').then(m => m.DiModule) },
  {
    path: 'todos',
    loadChildren: () => import('./features/todos/todos.module').then(m => m.TodosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
