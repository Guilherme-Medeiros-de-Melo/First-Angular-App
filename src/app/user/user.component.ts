import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';

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
  @Input({required:true}) id!:number
  @Input({required:true}) avatar!:string;
  @Input({required:true}) userName!:string;

  //Signal
  //avatar = input.required<string>();
  //userName = input.required<string>();

  //Both lines bellow do the exact same event variable
  //@Output() select = new EventEmitter();
  select = output<number>();
  
  get imagePath(){
    return 'assets/users/' + this.avatar
  }
  
  onSelectUser(){
    this.select.emit(this.id);
  }

  generateRandomUserIndex(){
    return Math.floor(Math.random() * DUMMY_USERS.length); 
  }
}
