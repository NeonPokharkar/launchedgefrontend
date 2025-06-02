import { ProfileService } from '../services/profile.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './profile-dashboard.component.html',
  styleUrl: './profile-dashboard.component.css'
})
export class ProfileDashboardComponent implements OnInit {
  username: string = '';

  constructor(private profileService: ProfileService) {
    // Initialization can be done here if needed
  }

  ngOnInit(): void {
    this.profileService.getProfileData().subscribe({
      next: (data: any) => {
        console.log('Profile data received:', data);
        if (data && data.userName) {
          this.username = data.userName;
        } else {
          this.username = 'Guest';
        }
      },
      error: (error: any) => {
        console.error('Error fetching profile data:', error);
      }
    });
  }
}
