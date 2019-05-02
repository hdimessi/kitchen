import { AuthGuard } from './../auth/auth.guard';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: []
})
export class RecipesComponent implements OnInit, OnDestroy {

  displayFullList = true;
  private subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.displayFullList = event.url.includes('recipes/') ? false : true;
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
