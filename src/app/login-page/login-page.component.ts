import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public password = "";
  public userName = "";
  public passwordStrength = "";
  public color: string = "";

  constructor(private router: Router) { }

  signup() {
    this.router.navigate(['/sign-up']);
  }

  login() {
    if (this.userName.length && this.password.length > 7) {
      this.router.navigate(['/home-page']);
    }
  }

  resetPassword() {
    this.router.navigate(['/resetpassword-page']);
  }

  setUsername(username: any) {
    this.userName = username;
  }

  setPassword(inputPassword: any) {
    this.password = inputPassword;
  }

}
