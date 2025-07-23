import { Component, Input } from '@angular/core';

interface Task {
  id: number;
  userId: number;
  title: string;
  dueDate: string;
  summary: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
