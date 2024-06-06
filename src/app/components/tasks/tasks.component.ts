import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../task';
import { TodoserviceService } from '../../services/todoservice.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private todoSvc: TodoserviceService) {}

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
    this.task = new Task(desc, priority, dueDate, this.uuidv4()); 

    console.log(this.task);
  }

  addTask() {
    this.todoSvc.setData(this.task);
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
  }


}
