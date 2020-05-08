import {Component, OnInit} from '@angular/core';
import {UserDetailsInterface} from '../../../interfaces/user-details/user-details.interface';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'ayen-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  userDetails: UserDetailsInterface;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.userDetails$.subscribe(userDetails => {
      this.userDetails = userDetails;
    });
  }

}
