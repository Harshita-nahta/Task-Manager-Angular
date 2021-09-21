import { Component, OnInit , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TODO } from "/Users/hnahta/Documents/Learning/Angular - learning/To-Do/src/app/todo";
import { Todo } from "/Users/hnahta/Documents/Learning/Angular - learning/To-Do/src/app/todo";
import { TodoService } from '/Users/hnahta/Documents/Learning/Angular - learning/To-Do/src/app/Services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  @Input()  TODO ;
  todos : Todo[]; 
  todoObj : any;
  newTodo: string;
  todoDesc:string;
  taskOwner : string
  dueDate : Date;
  created_at : Date;
  isPrior: boolean;
  id:number;
  status : string;
  updateId: number;
  updateTodo : any;
  updated: boolean = false ;

  constructor(private datePipe: DatePipe,
    private todoService: TodoService,
    private route: ActivatedRoute,
    public router: Router) {
    this.updateId = parseInt(this.router.url.split('/')[2]) 
    this.updated=false;
    this.newTodo = '';
    this.id = TODO[TODO.length - 1].id+1 ;
    this.taskOwner = 'Harshita'
    this.isPrior = false;
    this.status = 'New Task';
    console.log(this.updated)
    
    //this.updateTodo = false;
   }


  updateTask(){
    if(this.newTodo!==''){
      this.todoObj = {
      id : this.updateId,
      created_at : this.updateTodo.created_at,
      updated_at : this.datePipe.transform(new Date,"dd/MM/yyyy"),
      newTodo: this.newTodo,
      todoDesc : this.todoDesc,
      isPrior : this.isPrior,
      status: this.status,
      dueDate : this.dueDate,
      taskOwner : this.taskOwner
    }
    var i :number = this.todos.findIndex((value)=>{return value.id == this.updateId})
    this.todoService.update(this.todoObj, i )
    this.updated=true;
  }
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
    if(this.updateId >= 0){
      this.updateTodo = this.todos.filter((value)=>{
        return value.id===this.updateId
      })[0]
      this.newTodo = this.updateTodo.newTodo;
      this.dueDate = this.updateTodo.dueDate;
      this.taskOwner = this.updateTodo.taskOwner;
      this.isPrior = this.updateTodo.isPrior;
      this.status = this.updateTodo.status ;
      this.dueDate = this.updateTodo.dueDate;
      this.todoDesc = this.updateTodo.todoDesc;
     console.log(this.updateTodo)
    }
  }

 addTodo(event) {
      if (this.newTodo!==''){ 
      console.log(this.router.url)
      this.todoObj = {
        id : this.id,
        created_at : this.datePipe.transform(new Date,"dd/MM/yyyy"),
        updated_at : this.datePipe.transform(new Date,"dd/MM/yyyy"),
        newTodo: this.newTodo,
        todoDesc : this.todoDesc,
        isPrior : this.isPrior,
        status: this.status,
        dueDate : this.dueDate,
        taskOwner : this.taskOwner
      }
      this.id+=1;
      this.todoService.add(this.todoObj)
      this.newTodo = '';
      event.preventDefault();
  }}

  
  // completeTodo(i) {
  //    TODO[i].status = !TODO[i].status;
  //    console.log(TODO)
  //   }

  deleteTodo(id) {
    var i :number = this.todos.findIndex((value)=>{return value.id == this.updateId})
    this.todos.splice(i, 1);
    this.getTodos();
     
  }

  updateStatus(value){
    this.status= value;
    this.updateTask();
  }

  ngOnInit() {
    this.getTodos();
  }

}
