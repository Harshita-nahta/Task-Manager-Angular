import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ToDoListComponent } from './Components/to-do-list/to-do-list.component';
import {DatePipe} from '@angular/common';
import { CreateTodoComponent } from './Components/create-todo/create-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToDoListComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  //  NgbModule
  ],
  providers: [
      DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
