import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['../login-page/login-page.component.css']
})

export class SignupPageComponent {

  public password = "";
  public passwordStrength = "";
  public color: string = "";

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
