import { CurrentUser } from '../models/current-user.model';
import { AuthenticationService } from '../auth/authentication.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthGuard } from '../auth/auth.guard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header.desktop.component.html',
  styleUrls: ['./header.desktop.component.css']
})
export class HeaderDesktopComponent implements OnDestroy, OnInit {
  currentUser: CurrentUser;
  currentUserSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl(this.router.url);
  }
}
