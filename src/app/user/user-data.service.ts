import { Injectable } from '@angular/core';
import {User} from './user';
@Injectable()
export class UserDataService {
  lastId: number = 0;
  users: User[] = [];  
  constructor() { }
  // Simulate POST /users
  addUser(user: User): UserDataService {
    if (!user.id) {
      user.id = ++this.lastId;
    }
    this.users.push(user);
    console.log(this.users); 
    return this;
  }

  // Simulate DELETE /users/:id
  deleteUserById(id: number): UserDataService {
    this.users = this.users
      .filter(user => user.id !== id);
    return this;
  }

  // Simulate PUT /users/:id
  updateUserById(id: number, values: Object = {}): User {
    let user = this.getUserById(id);
    if (!user) {
      return null;
    }
    Object.assign(user, values);
    return user;
  }

  // Simulate GET /users
  getAllUsers(): User[] {
    return this.users;
  }

  // Simulate GET /users/:id
  getUserById(id: number): User {
    return this.users
      .filter(user => user.id === id)
      .pop();
  }

  
}