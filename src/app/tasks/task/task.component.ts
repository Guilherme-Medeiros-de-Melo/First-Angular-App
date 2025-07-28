import { Component, Input, output, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../ui/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
