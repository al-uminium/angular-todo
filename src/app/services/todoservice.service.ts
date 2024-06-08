import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private data = new Subject<Task>;
  private id = new Subject<string>; 
  data$ = this.data.asObservable();
  id$ = this.id.asObservable();

  setData(data: Task) {
    this.data.next(data);
  }

  setId(id: string) {
    this.id.next(id);
  }
}
