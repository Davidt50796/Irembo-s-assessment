import { Component } from '@angular/core';
import { Helper } from 'src/services/helper.service';
import { SimulationService } from 'src/services/simulation.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['../login-page/login-page.component.css']
})
export class ResetPasswordPageComponent {
  private email: string = "";
  public message: string = "";

  constructor(private helper: Helper, private simulationService: SimulationService) {}

  setEmail(inputEmail: string) {
    this.email = inputEmail;    
  }

  onSubmit() {
    if (this.helper.validateEmail(this.email)) {
      let check = this.simulationService.checkIfUserExistsOnForgotPassword(this.email);
      if (check.username) {
        // logic to send the login link to the email
      } else {
        this.message = "user doesn't exist";
      }
    } else {
      this.message = "invalid email"
    }
  }
}
