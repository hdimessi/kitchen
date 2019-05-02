import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, CanActivateChild } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import {  Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    recipesChildOpen = new Subject<boolean>();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let result = false;
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            result = true;
        } else {
            result = false;
        }

        if (state.url === '/joinus') {
            result = !result;
        }

        if (!result) {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        }
        return result;
    }
}
