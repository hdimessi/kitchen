import { RecipeService } from './recipe.service';

import { Observable } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {

  constructor(private recipeService: RecipeService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe> | Promise<Recipe> | Recipe {
    if (!this.recipeService.getRecipe(+route.params.id)) {
      this.router.navigate(['/']);
      return null;
    }
    return this.recipeService.getRecipe(+route.params.id);
  }
}
