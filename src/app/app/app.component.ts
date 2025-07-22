import { Component } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { UserComponent } from '../user/user.component';
import { DUMMY_USERS } from '../user/dummy-users';
import { TaskComponent } from "../task/task.component";

//Loops for Angular 17 and earlier
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?:number;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id:number){
    console.log('User ID: ' + id);
  }
}
