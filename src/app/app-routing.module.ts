import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './Components/create-todo/create-todo.component';
import {ToDoListComponent} from './Components/to-do-list/to-do-list.component';
const newLocal = 'Completed';
const routes: Routes = [
  { 
    path: '',
    component: ToDoListComponent, 
  },
  { 
    path: 'Priority',
    component: ToDoListComponent, 
  },
  { 
    path: 'In-Progress',
    component: ToDoListComponent, 
  },
  { 
    path: 'On-Hold',
    component: ToDoListComponent, 
  },
  { 
    path: 'Create',
    component: CreateTodoComponent, 
  },
  { 
    path: 'New',
    component: ToDoListComponent, 
  },
  { 
    path: 'Completed',
    component: ToDoListComponent, 
  },
  { 
    path: 'Update/:id',
    component: CreateTodoComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
