import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router} from '@angular/router';
import { TODO } from "/Users/hnahta/Documents/Learning/Angular - learning/To-Do/src/app/todo";
import { Todo } from "/Users/hnahta/Documents/Learning/Angular - learning/To-Do/src/app/todo";
import { TodoService } from '/Users/hnahta/Documents/Learning/Angular - learning/To-Do/src/app/Services/todo.service';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
  todos: Todo[];
  todoObj: any;
  completedTodo : Todo[];
  PriorityTodo: Todo[];
  HoldTodo : Todo[];
  NewTodo: Todo[];
  ProgressTodo : Todo[];
  id : number;
  url:string;
  isCompleted : boolean;
  isPriority: boolean;
  isNew: boolean;
  isHold : boolean;
  isProgress: boolean;
  dataSource : any;
  displayedColumns:string[] = ['id','newTask','taskOwner','status','created_at',"dueDate" , 'isPrior']


  constructor(private datePipe: DatePipe,
    private todoService: TodoService,
    public router: Router) 
    { 
      this.isCompleted = router.url == '/Completed';
      this.isHold = router.url == '/On-Hold';
      this.isPriority = router.url == '/Priority';
      this.isNew = router.url == '/New';
      this.isProgress = router.url == '/In-Progress';
      this.url = router.url.slice(1);
    }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
    this.dataSource = new MatTableDataSource(this.todos);
    this.completedTodo = this.todos.filter((value) => {
      return value.status === "Completed"
    })
    this.NewTodo = this.todos.filter((value) => {
      return value.status === "New Task"
    })
    this.ProgressTodo = this.todos.filter((value) => {
      return value.status === "In Progress"
    })
    this.HoldTodo = this.todos.filter((value) => {
      return value.status === "On Hold"
    })
    this.PriorityTodo = this.todos.filter((value) => {
      return value.isPrior === true
    })
    console.log(this.HoldTodo,this.NewTodo,this.PriorityTodo,this.ProgressTodo,this.completedTodo)
    if(this.isCompleted){
      this.dataSource = new MatTableDataSource(this.completedTodo);
    }
    if(this.isHold){
      this.dataSource = new MatTableDataSource(this.HoldTodo);
    }
    if(this.isNew){
      this.dataSource = new MatTableDataSource(this.NewTodo);
    }
    if(this.isProgress){
      this.dataSource = new MatTableDataSource(this.ProgressTodo);
    }
    if(this.isPriority){
      this.dataSource = new MatTableDataSource(this.PriorityTodo);
    }
  }
  
  applyFilter(filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  completeTodo(id, i) {
    if (this.todos[i].id!=id){
      i = this.todos.findIndex((value)=>{return value.id == id})
    }
    this.todos[i].status = "Completed";
    this.getTodos();  
  }

  setNewTodo(id, i) {
    if (this.todos[i].id!=id){
        i = this.todos.findIndex((value)=>{return value.id == id})
    }
    this.todos[i].status = "New Task";
    this.getTodos();
  }
  setHoldTodo(id, i) {
    if (this.todos[i].id!=id){
      i = this.todos.findIndex((value)=>{return value.id == id})
    }
      this.todos[i].status = "On Hold";
      this.getTodos();
  }
    
  setProgressTodo(id, i) {
  if (this.todos[i].id!=id){
    i = this.todos.findIndex((value)=>{return value.id == id})
  }
  this.todos[i].status = "In Progress";
  this.getTodos();
  }
  
  deleteTodo(id,i) {
    if (this.todos[i].id!=id){
      i = this.todos.findIndex((value)=>{return value.id == id})
    }
    if(i!==-1){
    this.todos.splice(i, 1);   
    this.getTodos();
  } }

  ngOnInit(){
    this.getTodos();
    
  }
 
}
