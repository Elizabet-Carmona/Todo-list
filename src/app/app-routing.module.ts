import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {TaskComponent} from "./task/task.component";
import {TaskItemComponent} from "./task/task-item/task-item.component";

const routes: Routes = [
  { path: 'usuarios', component: UserComponent },
  { path: 'tareas', component: TaskComponent, children: [
      { path: 'mostrar', component: TaskItemComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
