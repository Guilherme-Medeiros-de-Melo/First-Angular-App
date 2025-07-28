import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from './dummy_tasks';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: number) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: number) {
    this.tasks.push({
      id: new Date().getTime(),
      userId: userId,
      title: taskData.title,
      dueDate: taskData.date,
      summary: taskData.summary,
    });
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
