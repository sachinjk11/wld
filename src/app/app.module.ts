import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostItemComponent } from './post/post-list/post-item/post-item.component';
import { PostService } from './post/posts.service';
import { FooterComponent } from './footer/footer.component';
import { PlanDetailsComponent } from './plan/plan-details/plan-details.component';
import { PlanEditComponent } from './plan/plan-edit/plan-edit.component';
import { PlanListComponent } from './plan/plan-list/plan-list.component';
import { PlanItemComponent } from './plan/plan-list/plan-item/plan-item.component';
import { PlanService } from './plan/plans.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './about-us/feedback/feedback.component';
import { HtmlViewerComponent } from './about-us/html-viewer/html-viewer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent,
    PostListComponent,
    PostEditComponent,
    PostDetailsComponent,
    PostItemComponent,
    FooterComponent,
    PlanDetailsComponent,
    PlanEditComponent,
    PlanListComponent,
    PlanItemComponent,
    AboutUsComponent,
    FeedbackComponent,
    HtmlViewerComponent,
    DashboardComponent

  ],
  imports:[
    BrowserModule.withServerTransition({appId: 'my-app'}),
    CommonModule,
    NgtUniversalModule,
 
    TransferHttpCacheModule,
    HttpClientModule,
 
    
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService, PlanService,
    DataStorageService, AuthService, AuthGuard, PostService],

  
    
})
export class AppModule { }
