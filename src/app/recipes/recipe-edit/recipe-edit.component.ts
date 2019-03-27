import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.initForm();
    this.route.data.subscribe((data: Data) => {
      this.recipe = data.recipe;
      this.initForm();
    });
  }

  private initForm() {
    const recipeIngredients = new FormArray([]);
    if (this.recipe && this.recipe.ingredients) {
      this.recipe.ingredients.forEach(ingredient => {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        );
      });
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(
        this.recipe ? this.recipe.name : null,
        Validators.required
      ),
      imagePath: new FormControl(
        this.recipe ? this.recipe.imagePath : null,
        Validators.required
      ),
      description: new FormControl(
        this.recipe ? this.recipe.description : null,
        Validators.required
      ),
      ingredients: recipeIngredients
    });
  }

  getControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeService.getRecipes().length + 1,
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients
    );
    if (this.recipe) {
      newRecipe.id = this.recipe.id;
      this.recipeService.updateRecipe(newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }

    this.router.navigate(['..'], {relativeTo: this.route});
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onRemoveIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }
}
