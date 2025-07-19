import { Component, computed, signal } from '@angular/core';

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
  selectedUser = signal(DUMMY_USERS[this.generateRandomUserIndex()]);

  //get imagePath(){
  //  return 'assets/users/' + this.selectedUser().avatar
  //}
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  get userName(){
    return this.selectedUser.name
  }
  
  onSelectUser(){
    this.selectedUser.set(DUMMY_USERS[this.generateRandomUserIndex()]);
  }

  generateRandomUserIndex(){
    return Math.floor(Math.random() * DUMMY_USERS.length); 
  }
}
