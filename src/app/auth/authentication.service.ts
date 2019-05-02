import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CurrentUser } from '../models/current-user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { FeedBackService } from '../feed-back/feed-back.service';

@Injectable()
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<CurrentUser>;
  public currentUser: Observable<CurrentUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<CurrentUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): CurrentUser {
    return this.currentUserSubject.value;
  }

  singup(user: { name: string, email: string, password: string }): Observable<CurrentUser> {
    return this.http.post<CurrentUser>(environment.apiUrl + '/register', user)
      .pipe(
        map(currentUser => {
          // login successful if there's a jwt token in the response
          if (currentUser && currentUser.access_token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            this.currentUserSubject.next(currentUser);
          }
          return currentUser;
        })
      );
  }

  login(credentials: { email: string, password: string }): Observable<CurrentUser> {
    return this.http.post<CurrentUser>(environment.apiUrl + '/login', credentials)
      .pipe(
        map(currentUser => {
          // login successful if there's a jwt token in the response
          if (currentUser && currentUser.access_token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            this.currentUserSubject.next(currentUser);
          }
          return currentUser;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

  verifyEmail(email: string): Promise<any> {
    return this.http.get(environment.apiUrl + '/email/' + email).toPromise();
  }
}
