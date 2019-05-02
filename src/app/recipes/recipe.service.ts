import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from '../models/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe(
      '3ejja',
      'User experience sucks as well as Apple will only get better on the other hand awful user experience once profit.',
// tslint:disable-next-line: max-line-length
      // 'https://scontent.cdninstagram.com/vp/48c51fce6debdd373ad161dd563a9459/5D0AA3A3/t51.2885-15/e35/s480x480/52116035_631462337278109_1269396438204052541_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com',
      'http://localhost:4800/imgs/1.jpg',
      [
        new Ingredient('Eggs', 4),
        new Ingredient('Milk', 1)
      ],
      1
    ),
    new Recipe(
      'Pancakes',
      'I think my strongest asset maybe by far is my temperament. I have a placeholding temperament.',
      // 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'http://localhost:4800/imgs/2.jpg',
      [
        new Ingredient('Tomatos', 12),
        new Ingredient('French Fries', 25),
        new Ingredient('Bread', 2)
      ],
      2
    )
  ];

  constructor(private slService: ShoppingListService, private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
    // return this.http.get<Recipe[]>(environment.apiUrl + '/recipes');
  }

  getRecipe(id: number) {
    const recipe = this.recipes.find(
      (s) => {
        return s.id === id;
      }
    );
    return recipe;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(updatedRecipe: Recipe) {
    this.recipes.forEach((recipe: Recipe, index: number) => {
      if (recipe.id === updatedRecipe.id) {
        this.recipes[index] = updatedRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
    });
  }

  deleteRecipe(recipeToDelete: Recipe) {
    this.recipes.forEach((recipe: Recipe, index: number) => {
      if (recipe.id === recipeToDelete.id) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
    });
  }
}
