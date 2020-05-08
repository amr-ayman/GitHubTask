import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/services/user/user.service';
import {RepositoriesService} from '../../services/repositories-services/repositories.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ayen-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  userRepositories = [];
  username: string;
  repositoriesForm: FormGroup;
  filterBy: string;

  constructor(private userService: UserService,
              private repositoriesService: RepositoriesService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.userService.userRepositories$.subscribe(repositories => {
      this.userRepositories = repositories;
    });
    this.repositoriesForm.get('search').valueChanges.subscribe(value => {
      this.filterBy = value;
    });
  }

  initForm() {
    this.repositoriesForm = this.formBuilder.group({
      search: ['', [Validators.required]]
    });
  }

}
