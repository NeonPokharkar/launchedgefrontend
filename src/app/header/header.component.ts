import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  username: string = '';

  constructor(private router: Router, private profileService: ProfileService) {
    // Initialization can be done here if needed
  }

  ngOnInit(): void {
    this.profileService.getProfileData().subscribe({
      next: (data: any) => {
        console.log('Profile data received:', data);
        if (data && data.userName) {
          this.username = data.userName;
        } else {
          this.username = '';
        }
      },
      error: (error: any) => {
        console.error('Error fetching profile data:', error);
        this.username = ''; // Fallback in case of error
      }
    });
  }

  checkIfUserLoggedIn(): boolean {
    return this.username !== '';
  }

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  onSignUpClick() {
    this.router.navigate(['/signUp']);
  }

  onLogoutClick() {
    this.profileService.clearProfileData();
    this.username = '';
    this.router.navigate(['/login']);
  }

}
