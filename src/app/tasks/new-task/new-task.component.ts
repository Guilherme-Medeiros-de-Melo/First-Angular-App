import { Component, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  cancel = output<void>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  
  onCancel(){
    this.cancel.emit();
  }
}
