import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from './authentication.service';
import { FeedBackService } from '../feed-back/feed-back.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, 
                private feedBackService: FeedBackService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            let errorMessage: string;
            if (err.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                errorMessage = 'An error occurred:' + err.error.message;
            } else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                if (err.error && err.error.error) {
                    errorMessage = err.error.error;
                } else {
                    errorMessage = 'An error occurred';
                    console.error(err);
                }
            }

            this.feedBackService.displayNewFeedBack({ text: errorMessage, style: false });

            const error = err.error.message || err.statusText;
            // return an observable with a user-facing error message
            return throwError(error);
        }));
    }
}