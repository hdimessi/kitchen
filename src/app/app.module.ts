import { FeedBackPipe } from './shared/feedBack.pipe';
import { FeedBackService } from './feed-back/feed-back.service';
import { AuthenticationService } from './auth/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecipeResolver } from './recipes/recipe-resolver.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUtensils, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

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
import { FeedBackComponent } from './feed-back/feed-back.component';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';

library.add(faUtensils);
library.add(faCheckCircle);
library.add(faExclamation);
library.add(faFacebookF);
library.add(faGoogle);

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
      SingupComponent,
      FeedBackComponent,
      FeedBackPipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule
   ],
   providers: [
      ShoppingListService,
      RecipeService,
      RecipeResolver,
      FeedBackService,
      AuthenticationService,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
