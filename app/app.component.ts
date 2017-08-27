import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'app',
  templateUrl: './app/app.component.html',   
  styleUrls: ['./app/app.component.css']
})

export class AppComponent {
	message: string = 'Hello';
  users: User[] = [
    {id: 10, name: 'Charles', username: 'servilcha'},
    {id: 25, name: 'Ester', username: 'servilester'},
    {id: 30, name: 'Francis', username: 'servilfrancis'}
  ];
  activeUser = User;
  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  };

  onUserCreated(event) {
    this.users.push(event.user);
  };
}