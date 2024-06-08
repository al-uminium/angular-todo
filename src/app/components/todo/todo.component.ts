import { Component, Input, OnDestroy } from '@angular/core';
import { Task } from '../../task';
import { TodoserviceService } from '../../services/todoservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnDestroy{
  @Input() listOfTasks!: Task[];

  selectedId!: string;

  constructor(private todoIdSvc: TodoserviceService) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  handleOnClick(e: any) {
    this.selectedId = e.target.id;
    this.todoIdSvc.setId(this.selectedId);
  }
}
