import { Component } from '@angular/core';
import { slideInAnimation } from './shared/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
