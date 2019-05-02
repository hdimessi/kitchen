import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.recipe = data.recipe;
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
