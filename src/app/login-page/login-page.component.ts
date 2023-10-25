import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimulationService } from 'src/services/simulation.service';

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
  public message: string = '';

  constructor(private router: Router, private simulationService: SimulationService) { }

  signup() {
    this.router.navigate(['/sign-up']);
  }

  login() {
    if (this.userName.length && this.password.length > 7) {
      // let userBool = this.simulationService.checkIfUserExistsOnLogin(this.userName, this.password);
      // if (userBool) {
      this.router.navigate(['/home-page']);
      // } else {
      // this.message = "User not found, please singup"
      // }
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
