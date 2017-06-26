import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss','./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  sign_up: Boolean = false;
  login: Boolean = true;

  option() {   
    this.sign_up = !this.sign_up; 
    this.login = !this.login;   
  }

  constructor() { }
    
  ngOnInit() {
  }
  clicked(event) {
    event.preventDefault();
  }
}
