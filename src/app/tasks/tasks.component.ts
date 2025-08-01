import { Component, inject, Input } from '@angular/core';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from './task/task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  private tasksService = inject(TasksService);

  @Input({required:true}) userId!: number;
  @Input({required:true}) name!: string;
  isAddingTask = false;

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  addTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskData){
    this.isAddingTask = false;
  }
}
