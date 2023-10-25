// the current service used to try to simulate the expected flow of the user accout management

import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class SimulationService {
  private users: User[] = [];
  public loggedInUser = {};

  addNewUser(user: User) {
    let usersLength = this.users.length;
    this.users.push({ ...user, userId: usersLength });
  }

  checkIfUserExistsOnLogin(userName: string, userPassword: string): boolean {
    let loginUser: any;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].password === userPassword && this.users[i].userName === userName) {
        loginUser = this.users[i];
      }
    }
    if (loginUser) {
      this.loggedInUser = loginUser;
      return true;
    } else {
      this.loggedInUser = {};
      return false;
    }
  }

  checkIfUserExistsOnForgotPassword(userName: string) {
    let fpuser: any;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userName === userName) {
        fpuser = this.users[i];
      }
    }

    if (fpuser) {
      return fpuser;
    } else {
      return {};
    }
  }
}