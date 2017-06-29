import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserDataService} from '../user-data.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss','./user-form.component.css'],
  providers: [UserDataService]
})
export class UserFormComponent implements OnInit {
  sign_up: Boolean = false;
  login: Boolean = true;
  newUser: User = new User();
  
  constructor(private userDataService: UserDataService) { }
    
  ngOnInit() {
  }
  option(a:number) {
    if(a == 0){
        this.sign_up = false; 
        this.login = true;
    }
    else{
        this.sign_up = true; 
        this.login = false;
    }   
       
  }      
  addUser() {
      
    this.userDataService.addUser(this.newUser);
    
      this.newUser = new User();
  }
}
