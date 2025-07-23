import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy_tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!: number;
  @Input({required:true}) name!: string;

  tasks = DUMMY_TASKS;

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
