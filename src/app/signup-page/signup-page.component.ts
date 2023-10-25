import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { SimulationService } from '../../services/simulation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['../login-page/login-page.component.css']
})

export class SignupPageComponent {

  public password = "";
  public passwordStrength = "";
  public color: string = "";
  public samePasswordStr: string = "";

  public finalPassword: string = "";
  public dateOfBirth: string = "";
  public firstName: string = "";
  public lastName: string = "";
  public userName: string = "";
  public gender: string = "";
  public selectedMaritalStatus: string = '';
  public age: number = 0;
  public nationality: string = "";


  public genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ]
  public maritalStatusOptions = [
    { label: 'Single', value: 'Single' },
    { label: 'Married', value: 'Married' },
    { label: 'Divorced', value: 'Divorced' },
    { label: 'Widowed', value: 'Widowed' }
  ];

  constructor(private simulationService: SimulationService, private router: Router) {

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

    if (passed < 2) {
      this.color = "text-red-500";
      this.passwordStrength = "weak!";
    } else if (inputPassword.length < 8 && passed > 2) {
      this.color = "text-red-500";
      this.passwordStrength = "minimum length is 8 characters";
    } else if (inputPassword.length >= 8 && passed <= 2) {
      this.color = "text-yellow-500";
      this.passwordStrength = "Good!";
      this.password = inputPassword;
    } else if (inputPassword.length >= 8 && passed >= 3) {
      this.color = "text-green-600";
      this.passwordStrength = "strong!";
      this.password = inputPassword;
    }
  }

  checkPasswordIsSame(rePassword: any) {
    if (rePassword === this.password) {
      this.finalPassword = rePassword;
      this.samePasswordStr = "";
    } else {
      this.samePasswordStr = "password is incorrect";
    }
  }

  setDateOfBirth(date: any) {
    var d = new Date(date.target.value),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    console.log("Selected date is", [year, month, day].join("-"));
    this.dateOfBirth = [year, month, day].join("/");

  }

  setMaritalStatus(status: any) {
    this.selectedMaritalStatus = status.target.value;
  }

  setGender(inputGender: any) {
    this.gender = inputGender.target.value;
  }

  setNationality(nationality: any) {
    this.nationality = nationality;
  }

  setAge(age: any) {
    this.age = age;
  }

  setFirstName(name: any) {
    this.firstName = name;
  }

  setLastName(name: any) {
    this.lastName = name;
  }

  setUserName(name: any) {
    this.userName = name;
  }

  onSubmit() {
    let user: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      age: this.age,
      gender: this.gender,
      nationality: this.nationality,
      password: this.finalPassword,
      dateOfBirth: this.dateOfBirth,
      maritalStatus: this.selectedMaritalStatus,
    }

    console.log("newuser", user);
    if (user.password) {
      this.router.navigate(['/home-page']);
    }
    // this.simulationService.addNewUser(user);
  }
}
