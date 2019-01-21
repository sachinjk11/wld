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
import { DietPlansComponent } from './diet-plans/diet-plans.component';
import { EditDietPlanComponent } from './diet-plans/edit-diet-plan/edit-diet-plan.component';
import { ViewDietPlanComponent } from './diet-plans/view-diet-plan/view-diet-plan.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/weight-loss-diet-plan', pathMatch: 'full' },
  { path: 'weight-loss-diet-plan', component: DietPlansComponent, children: [
    //{ path: '', component: RecipeStartComponent },
    { path: 'new', component: EditDietPlanComponent, canActivate: [AuthGuard] },
    { path: ':id', component: ViewDietPlanComponent },
    { path: ':id/edit', component: EditDietPlanComponent, canActivate: [AuthGuard] },
  ] },
  { path: 'recipes', component: RecipesComponent, children: [
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
