import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'sign-up', component: SignupPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'resetpassword-page', component: ResetPasswordPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
