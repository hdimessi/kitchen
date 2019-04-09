import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSignup() {
    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    const newUser = new User(name, email, password);

    this.authService.singup(newUser);
  }
}
