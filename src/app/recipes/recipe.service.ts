import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe(
      '3ejja',
      'User experience sucks as well as Apple will only get better on the other hand awful user experience once profit.',
// tslint:disable-next-line: max-line-length
      'https://scontent.cdninstagram.com/vp/48c51fce6debdd373ad161dd563a9459/5D0AA3A3/t51.2885-15/e35/s480x480/52116035_631462337278109_1269396438204052541_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com',
      [
        new Ingredient('Eggs', 4),
        new Ingredient('Milk', 1)
      ]
    ),
    new Recipe(
      'Pancakes',
      'I think my strongest asset maybe by far is my temperament. I have a placeholding temperament.',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [
        new Ingredient('Tomatos', 12),
        new Ingredient('French Fries', 25),
        new Ingredient('Bread', 2)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
