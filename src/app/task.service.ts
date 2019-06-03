import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Task } from './Task';
import { Tasks } from './mock-tasks';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(private messageService: MessageService) { }

  getTasks(): Observable<Task[]> {
    // TODO: send the message _after_ fetching the tasks
    this.messageService.add('TaskService: fetched tasks');
    return of(Tasks);
  }

  getTask(id: number): Observable<Task> {
    // TODO: send the message _after_ fetching the task
    this.messageService.add(`TaskService: fetched task id=${id}`);
    return of(Tasks.find(task => task.id === id));
  }
}