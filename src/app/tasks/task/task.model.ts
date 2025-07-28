export interface Task {
  id: number;
  userId: number;
  title: string;
  dueDate: string;
  summary: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
