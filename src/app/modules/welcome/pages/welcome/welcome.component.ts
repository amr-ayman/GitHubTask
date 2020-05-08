import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../core/services/user/user.service';
import {SessionStorageService} from '../../../../core/services/session-storage/session-storage.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ayen-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  isSearchPage = false;
  userForm: FormGroup;
  responseError = false;
  userDetails: Subscription;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private sessionStorage: SessionStorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.userForm.get('username').valueChanges.subscribe(value => {
      if (value && value.trim()) {
        this.responseError = false;
      }
    });
  }

  ngOnDestroy() {
    this.userDetails.unsubscribe();
  }

  onContinue() {
    this.isSearchPage = !this.isSearchPage;
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]]
    });
  }

  onStart() {
    if (!this.userForm.valid) {
      return;
    } else {
      const gitHubUser = this.userForm.get('username').value.trim();
      this.userForm.reset();
      if (!gitHubUser) {
        this.responseError = true;
        return;
      }
      this.sessionStorage.setSession('username', gitHubUser);
      this.userService.username = gitHubUser;
      this.userDetails = this.userService.userDetails$.subscribe(() => {
        this.router.navigate(['github']);
      });
    }
  }

}
