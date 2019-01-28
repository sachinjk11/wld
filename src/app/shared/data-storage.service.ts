import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { PostService } from '../post/posts.service';
import { Post } from '../post/posts.model';
import { PlanService } from '../plan/plans.service';
import { Plan } from '../plan/plan.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,private postService : PostService,
              private authService: AuthService, private planService : PlanService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put('https://wld001.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://wld001.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

  storePosts() {
    const token = this.authService.getToken();
    return this.http.put('https://wld001.firebaseio.com/posts.json?auth=' + token, this.postService.get());
  }

  getposts() {
    //const token = this.authService.getToken();
    //this.http.get('https://wld001.firebaseio.com/posts.json?auth=' + token)
    this.http.get('https://wld001.firebaseio.com/posts.json')
      .map(
            (response: Response) => {  const posts: Post[] = response.json();  return posts; }
          )
      .subscribe(
                    (posts: Post[]) => {  this.postService.set(posts); }
      );
  }



  storePlans() {
    const token = this.authService.getToken();
    return this.http.put('https://wld001.firebaseio.com/plans.json?auth=' + token, this.planService.get());
  }

  getPlans() {
    //const token = this.authService.getToken();
    //this.http.get('https://wld001.firebaseio.com/posts.json?auth=' + token)
    this.http.get('https://wld001.firebaseio.com/plans.json')
      .map(
            (response: Response) => {  const plans : Plan[] = response.json();  return plans; }
          )
      .subscribe(
                    ( plans: Plan[]) => {  this.planService.set(plans); }
      );
  }
}
