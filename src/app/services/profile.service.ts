import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileData: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() { }

  public setProfileData(data: any): void {
    console.log('Setting profile data:', data);
    this.profileData.next(data);
  }

  public getProfileData(): Observable<any> {
    return this.profileData.asObservable();
  }

  public clearProfileData(): void {
    console.log('Clearing profile data');
    this.profileData.next({});
  }
}
