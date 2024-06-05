import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../task';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  priorities: string[] = ["Low", "Medium", "High"];

  taskForm = new FormGroup({
    description: new FormControl("", Validators.required),
    priority: new FormControl("Low", Validators.required),
    dueDate: new FormControl("", Validators.required)
  })

  task!: Task;

  onSubmit() {
    let desc = this.taskForm.value.description!;
    let priority = this.taskForm.value?.priority!;
    let dueDate = new Date(this.taskForm.value.dueDate!);
    this.task = new Task(desc, priority, dueDate); 

    console.log(this.task);
  }

  @Output() addTask = new Subject<Task>();

  
}
