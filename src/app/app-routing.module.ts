import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';

import { DietPlansComponent } from './diet-plans/diet-plans.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/weight-loss-Tips', pathMatch: 'full' },
   { path: 'weight-loss-diet-plans', component: DietPlansComponent },
   { path: 'weight-loss-Tips', component: PostListComponent, children: [

     { path: 'new', component: PostEditComponent, canActivate: [AuthGuard] },
     { path: ':id', component: PostDetailsComponent },
     { path: ':id/edit', component: PostEditComponent, canActivate: [AuthGuard] },
   ] },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
