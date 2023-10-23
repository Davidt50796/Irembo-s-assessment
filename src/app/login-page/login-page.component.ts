import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public password = "";
  public passwordStrength = "";
  public color: string = "";

  constructor(private router: Router) { }

  signup() {
    this.router.navigate(['/sign-up']);
  }

  login() {
    this.router.navigate(['/home-page']);
  }

  resetPassword() {
    this.router.navigate(['/resetpassword-page']);
  }

  checkPasswordStrength(inputPassword: any) {
    let regex = new Array();
    regex.push("[A-Z]");
    regex.push("[a-z]");
    regex.push("[0-9]");
    regex.push("[$@$!%*#?&]");

    let passed = 0;

    if (inputPassword.length > 0) {
      for (let i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(inputPassword)) {
          passed++;
        }
      }
    }

    if (inputPassword.length < 8 && passed < 2) {
      this.color = "text-red-500";
      this.passwordStrength = "weak";
    } else if (inputPassword.length < 8 && passed >= 2) {
      this.color = "text-red-500";
      this.passwordStrength = "minimum length is 8 characters";
    } else if (inputPassword.length >= 8 && passed < 2) {
      this.color = "text-red-400";
      this.passwordStrength = "weak";
    } else if (inputPassword.length >= 8 && passed === 2) {
      this.color = "text-yellow-500";
      this.passwordStrength = "good";
    } else {
      this.color = "text-green-600";
      this.passwordStrength = "strong";
      this.password = inputPassword;
    }
  }

}
