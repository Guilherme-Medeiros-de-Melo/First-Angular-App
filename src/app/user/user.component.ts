import { Component, Input, input } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  //Regular, zone.js
  @Input({required:true}) avatar!:string;
  @Input({required:true}) userName!:string;

  //Signal
  //avatar = input.required<string>();
  //userName = input.required<string>();

  selectedUser = DUMMY_USERS[this.generateRandomUserIndex()];

  get imagePath(){
    return 'assets/users/' + this.avatar
  }
  
  onSelectUser(){
    this.selectedUser = DUMMY_USERS[this.generateRandomUserIndex()];
  }

  generateRandomUserIndex(){
    return Math.floor(Math.random() * DUMMY_USERS.length); 
  }
}
