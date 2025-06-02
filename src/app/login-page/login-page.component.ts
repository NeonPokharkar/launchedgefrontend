import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  errorMessage: string | undefined;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router) {
    // Initialization can be done here if needed 
  }

  ngOnInit(): void {
    // Initialization already handled in the property declaration
  }

  onLogin() {
    const { username, password } = this.loginForm.value;

    // Use Angular's HttpClient for API calls
    // First, inject HttpClient in the constructor:
    // constructor(private http: HttpClient) {}

    this.http.post('https://launch-edge-backend-6f7b205c1c2b.herokuapp.com/auth', { "userName" : username, "password": password }).subscribe({
      next: (data) => {
        console.log('Login successful', data);
        this.profileService.setProfileData({"userName": username});
        // Redirect to the profile dashboard after successful login
        // Use Angular's Router for navigation to ensure services are not reloaded
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        console.error('Login failed', error);
      this.errorMessage = error.error.message || 'Login failed';
      }
    });
  }

}
