import { AuthGuard } from './../auth/auth.guard';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {

  displayFullList = true;
  displaySideView = false;
  private subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('recipes/')) {
          this.displayFullList = false;
          setTimeout(() => {
            this.displaySideView = true;
          }, 500);
        } else {
          this.displaySideView = false;
          this.displayFullList = true;
        }
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
