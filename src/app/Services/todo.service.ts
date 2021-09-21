import { Injectable } from '@angular/core';
import { TODO } from "/Users/hnahta/Documents/Learning/Angular - learning/To-Do/src/app/todo";
import { Todo } from "/Users/hnahta/Documents/Learning/Angular - learning/To-Do/src/app/todo";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todo : Todo[];
  
  constructor() { 
    this.todo = TODO;
  }
  add(todo : Todo ) {
  this.todo.push(todo)
  console.log(this.todo)
  }
  update(todo : Todo , i){
    console.log(todo)
    this.todo[i] = todo;
  }
  getTodos(): Observable<Todo[]> { 
    return of(this.todo);
}
}
