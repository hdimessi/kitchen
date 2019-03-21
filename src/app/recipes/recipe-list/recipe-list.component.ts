import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe(
      '3ejja',
      'User experience sucks as well as Apple will only get better on the other hand awful user experience once profit.',
// tslint:disable-next-line: max-line-length
      'https://scontent.cdninstagram.com/vp/48c51fce6debdd373ad161dd563a9459/5D0AA3A3/t51.2885-15/e35/s480x480/52116035_631462337278109_1269396438204052541_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'
    ),
    new Recipe(
      'Pancakes',
      'I think my strongest asset maybe by far is my temperament. I have a placeholding temperament.',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    )
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
