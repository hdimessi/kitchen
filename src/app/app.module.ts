import { AuthenticationService } from './auth/authentication.service';
import { HttpClientModule }    from '@angular/common/http';
import { RecipeResolver } from './recipes/recipe-resolver.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CollapseDirective } from './shared/collapse.directive';
import { RecipeService } from './recipes/recipe.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SingupComponent } from './auth/singup/singup.component';

library.add(faUtensils);

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipesComponent,
      ShoppingListComponent,
      ShoppingEditComponent,
      RecipeDetailComponent,
      RecipeListComponent,
      RecipeItemComponent,
      DropdownDirective,
      CollapseDirective,
      RecipeStartComponent,
      RecipeEditComponent,
      SingupComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule
   ],
   providers: [ShoppingListService, RecipeService, RecipeResolver, AuthenticationService ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
