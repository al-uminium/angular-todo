import { Component, Input } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() listOfTasks!: Task[];

  
}
