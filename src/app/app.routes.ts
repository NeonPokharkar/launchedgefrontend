import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signUp', component: SignUpPageComponent },
  { path: 'profile', component: ProfileDashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
