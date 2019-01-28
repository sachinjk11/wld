import { Plan } from './plan.model';
import { Subject } from 'rxjs/Subject';
import { isDevMode, Injectable } from '@angular/core';

@Injectable()
export class PlanService
{
    plans : Plan[] = [
      new Plan(
           'Loading...','',
           'Loading...',
           'Loading...')
          ];
 
     planUpdated = new Subject<Plan[]>();
     planSelected = new Subject<boolean>();
     planEdit = new Subject<number>();
 
     constructor(){ 
       if(!isDevMode()){
         //private dataStorageService : DataStorageService
         //dataStorageService.getposts();
       }
     }
 
     set(plans: Plan[]) {
         this.plans = plans;
         this.planUpdated.next(this.plans.slice());
       }
     
       get() {
         return this.plans.slice();
       }
     
       getByIndex(index: number) {
         return this.plans[index];
       }
     
       add(plan: Plan) {
         this.plans.push(plan);
         this.planUpdated.next(this.plans.slice());
       }
     
       update(index: number, post: Plan) {
         this.plans[index] = post;
         this.planUpdated.next(this.plans.slice());
       }
     
       delete(index: number) {
         this.plans.splice(index, 1);
         this.planUpdated.next(this.plans.slice());
       }
 
}