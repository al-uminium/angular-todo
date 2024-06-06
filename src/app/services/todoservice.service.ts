import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private data = new Subject<Task>; 
  data$ = this.data.asObservable();
  
  setData(data: Task) {
    this.data.next(data);
  }
}
