import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'ayen-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  pageTabs = [
    {name: 'overview', title: 'Overview', componentUrl: 'github/overview'},
    {name: 'repositories', title: 'Repositories', itemCount: 0, componentUrl: 'github/repositories'},
    {name: 'projects', title: 'Projects', itemCount: 0, componentUrl: 'github/projects'},
    {name: 'stars', title: 'Stars', itemCount: 0, componentUrl: 'github/stars'},
    {name: 'followers', title: 'Followers', itemCount: 0, componentUrl: 'github/followers'},
    {name: 'following', title: 'Following', itemCount: 0, componentUrl: 'github/following'}
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.userRepositories$.subscribe(repositories => {
      this.pageTabs[1].itemCount = repositories.length;
    });
  }

  tabChanged(tab) {
    console.log(tab);
  }
}
