import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
// tslint:disable-next-line: max-line-length
    new Recipe('3ejja', 'User experience sucks as well as Apple will only get better on the other hand awful user experience once profit.', 'https://scontent.cdninstagram.com/vp/48c51fce6debdd373ad161dd563a9459/5D0AA3A3/t51.2885-15/e35/s480x480/52116035_631462337278109_1269396438204052541_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'),
    new Recipe('3ejja', 'User experience sucks as well as Apple will only get better on the other hand awful user experience once profit.', 'https://scontent.cdninstagram.com/vp/48c51fce6debdd373ad161dd563a9459/5D0AA3A3/t51.2885-15/e35/s480x480/52116035_631462337278109_1269396438204052541_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com')
  ];

  constructor() { }

  ngOnInit() {
  }

}
