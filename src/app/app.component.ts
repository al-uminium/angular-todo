import { Component, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { Task } from './task';
import { TodoserviceService } from './services/todoservice.service';
import { Subscription } from 'rxjs';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasksComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'todo';
  @Output() listOfTasks!: Task[];

  subscription: Subscription;

  constructor(private todoSvc: TodoserviceService) {
    this.subscription = this.todoSvc.data$.subscribe( d => {
      this.listOfTasks.push(d);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    this.listOfTasks = new Array();
  }
  

}
