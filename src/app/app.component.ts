import { Component } from '@angular/core';
import { User } from './User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  userModel : User = new User('' , '' , null , '');

  isFormEmpty : boolean = true;

  users : User[] = [];

  onSubmit(userForm : NgForm)
  {
    this.isFormEmpty = false;
    this.users.push(userForm.value);
    

    // userForm.reset();
  }

}
