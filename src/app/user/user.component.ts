import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';
import { type User } from './user.model';
import { DUMMY_USERS } from './dummy-users';

  interface UserInterface {
    id: number;
    avatar: string;
    name: string;
  };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  //Regular, zone.js
  @Input({required:true}) user!: User;

  //Signal
  //avatar = input.required<string>();
  //userName = input.required<string>();

  //Both lines bellow do the exact same event variable
  //@Output() select = new EventEmitter<number>();
  select = output<number>();
  
  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }
  
  onSelectUser(){
    this.select.emit(this.user.id);
  }

  generateRandomUserIndex(){
    return Math.floor(Math.random() * DUMMY_USERS.length); 
  }
}
