import { Component, Input, output, Output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  complete = output<number>();

  completeTask() {
    this.complete.emit(this.task.id);
  }
}
