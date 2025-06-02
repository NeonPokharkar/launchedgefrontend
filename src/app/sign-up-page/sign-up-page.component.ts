import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {
  errorMessage: string | undefined;
    signUpForm: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  
    constructor(private http: HttpClient, private profileService: ProfileService, private router: Router) {
      // Initialization can be done here if needed 
    }
  
    ngOnInit(): void {
      // Initialization already handled in the property declaration
    }
  
    onSignUp() {
      const { username, password } = this.signUpForm.value;
  
      // Use Angular's HttpClient for API calls
      // First, inject HttpClient in the constructor:
      // constructor(private http: HttpClient) {}
  
      this.http.post('https://launch-edge-backend-6f7b205c1c2b.herokuapp.com/user', { "userName" : username, "password": password }).subscribe({
        next: (data) => {
          console.log('Sign Up successful', data);
          // Redirect to the profile dashboard after successful login
          // Use Angular's Router for navigation to ensure services are not reloaded
          alert('Sign Up successful! You can now log in.');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Sign Up failed', error);
        this.errorMessage = error.error.message || 'Sign Up failed';
        }
      });
    }
}
