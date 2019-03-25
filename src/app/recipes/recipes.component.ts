import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: []
})
export class RecipesComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
