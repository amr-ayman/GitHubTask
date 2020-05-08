import {Injectable} from '@angular/core';
import {UserDetailsInterface} from '../../interfaces/user-details/user-details.interface';
import {HttpService} from '../http/http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {finalize, map, share} from 'rxjs/operators';
import {SessionStorageService} from '../session-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  gitUsername: string;
  private isLoading = false;
  userDetails = new BehaviorSubject(null);
  userRepositories = new BehaviorSubject(null);

  // Get Username
  get username(): string {
    return this.gitUsername;
  }

  // Set Username
  set username(username: string) {
    this.gitUsername = username;
  }

  // Get User Details
  get userDetails$(): Observable<any> {
    if (this.userDetails.value) {
      return this.userDetails.asObservable();
    }
    this.isLoading = true;
    return this.getUserDetails().pipe(finalize(() => this.isLoading = false), share()).pipe(map(value => {
      const userDetails: UserDetailsInterface = {
        name: value.name,
        username: value.login,
        title: value.bio,
        company: value.company,
        location: value.location,
        website: value.blog,
        photo: value['avatar_url']
      };
      this.userDetails.next(userDetails);
      return userDetails;
    }));
  }

  // Get User Repositories
  get userRepositories$(): Observable<any> {
    if (this.userRepositories.value) {
      return this.userRepositories.asObservable();
    }
    this.isLoading = true;
    return this.getUserRepositories().pipe(finalize(() => this.isLoading = false), share()).pipe(map(value => {
      this.userRepositories.next(value);
      return value;
    }));
  }

  constructor(private sessionStorage: SessionStorageService, private httpService: HttpService) {
    this.username = this.sessionStorage.getSession('username') ? this.sessionStorage.getSession('username') : '';
  }

  getUserDetails() {
    return this.httpService.get(`users/${this.username}`);
  }

  getUserRepositories() {
    return this.httpService.get(`users/${this.username}/repos`);
  }
}
