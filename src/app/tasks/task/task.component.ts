import { Component, inject, Input, output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../ui/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

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
  private tasksService = inject(TasksService);

  completeTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
