import { Component, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTasksComponent } from './components/tasks/createtasks.component';
import { Task } from './task';
import { TodoserviceService } from './services/todoservice.service';
import { Subscription } from 'rxjs';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateTasksComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'todo';
  @Output() listOfTasks!: Task[];
  @Output() listOfCompletedTasks!: Task[];

  todoTaskSub: Subscription;
  todoIdSub: Subscription;

  constructor(private todoSvc: TodoserviceService) {
    this.todoTaskSub = this.todoSvc.data$.subscribe( d => {
      this.listOfTasks.push(d);
    })
    this.todoIdSub = this.todoSvc.id$.subscribe( id => {
      this.listOfTasks.forEach((task, index) => {
        if (task.id == id) {
          const newListOfTasks = this.listOfTasks;
          newListOfTasks.splice(index, 1)
          this.listOfTasks = newListOfTasks;
          this.listOfCompletedTasks.push(task);
        }
      });
    })
  }


  ngOnDestroy(): void {
    this.todoTaskSub.unsubscribe;
    this.todoIdSub.unsubscribe;
  }

  ngOnInit(): void {
    this.listOfTasks = new Array();
    this.listOfCompletedTasks = new Array();
    this.listOfTasks.push(new Task("test", "Medium", new Date(), "abcs"))
    this.listOfTasks.push(new Task("test2", "Medium", new Date(), "abcde"))
    this.listOfTasks.push(new Task("test3", "Medium", new Date(), "abaaaas"))
  }
  

}
