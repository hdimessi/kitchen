import { AuthGuard } from './../auth.guard';
import { CurrentUser } from './../../models/current-user.model';
import { FeedBackService } from 'src/app/feed-back/feed-back.service';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  signupForm: FormGroup;
  verifyingEmail = 0;
  showSignup = false;

  loginForm: FormGroup;

  constructor(private authService: AuthenticationService,
              private feedBackService: FeedBackService,
              private location: Location,
              private authGuard: AuthGuard) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.nameValidator]),
      email: new FormControl(null, [Validators.required, Validators.email], this.emailValidator.bind(this)),
      password: new FormControl(null, [Validators.required, this.passwordValidator])
    });

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, this.passwordValidator])
    });
  }

  toggleView(btnId: string) {
    if (btnId === 'signUp') {
      this.showSignup = true;
    } else {
      this.showSignup = false;
    }
  }

  onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.login({email, password}).subscribe(
      (user => this.navigateAway(user)));
  }

  onSignup() {
    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;

    this.authService.singup({name, email, password})
    .subscribe(user => this.navigateAway(user));
  }

  navigateAway(user: CurrentUser) {
    this.feedBackService.displayNewFeedBack({text: 'Welcome ' + user.user.name, style: true});
    this.location.back();
  }

  emailValidator(control: FormControl): Observable<any> | Promise<any> {
    this.verifyingEmail = 1;
    const promise = new Promise((resolve, reject) => {
      this.authService.verifyEmail(control.value)
        .then(res => {
          this.verifyingEmail = res.validity ? 2 : 3;
          if (res.validity) {
            resolve(null);
          } else {
            resolve(!res.used ? {format: false} : {emailUsed: true});
          }
        }, err => {
          this.verifyingEmail = 0;
          resolve(null);
        });
    });
    return promise;
  }

  nameValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value && control.value.length < 3) {
      return {tooShort: true};
    }
    return null;
  }

  passwordValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value && control.value.length < 8) {
      return {tooShort: true};
    }
    return null;
  }
}
