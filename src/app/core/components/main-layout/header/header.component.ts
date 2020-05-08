import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {SessionStorageService} from '../../../services/session-storage/session-storage.service';
import {Router} from '@angular/router';
import {UserDetailsInterface} from '../../../interfaces/user-details/user-details.interface';

@Component({
  selector: 'ayen-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpened = false;
  userDetails: UserDetailsInterface;

  constructor(private userService: UserService, private sessionStorage: SessionStorageService, private router: Router) {
  }

  ngOnInit() {
    this.userService.userDetails$.subscribe(userDetails => {
      this.userDetails = userDetails;
    });
  }

  goToWelcome() {
    this.sessionStorage.removeSession('username');
    this.router.navigate(['/']);
  }

}
