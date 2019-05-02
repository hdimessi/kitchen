import { AuthGuard } from './auth/auth.guard';
import { SingupComponent } from './auth/singup/singup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeResolver } from './recipes/recipe-resolver.service';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard],
    resolve: {recipe: RecipeResolver},
    runGuardsAndResolvers: 'always' },
    { path: ':id', component: RecipeDetailComponent, resolve: {recipe: RecipeResolver}, data: {animation: 'RecipeDetailPage'} }
  ], data: {animation: 'RecipesPage'} },
  { path: 'shopping-list', component: ShoppingListComponent, data: {animation: 'ShoppingListPage'} },
  { path: 'joinus', component: SingupComponent, canActivate: [AuthGuard], data: {animation: 'SignupPage'} },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
