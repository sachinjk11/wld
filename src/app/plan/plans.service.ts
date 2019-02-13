import { Plan } from './plan.model';
import { Subject } from 'rxjs/Subject';
import { isDevMode, Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Title } from '@angular/platform-browser';

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
      //private dataStorageService : DataStorageService
     }
 
     set(plans: Plan[]) {
         this.plans = plans;
         this.planUpdated.next(this.plans.slice());
       }
     
       get() {
         return this.plans.slice();
       }
     
       getByIndex(index: number) {
        let plan = this.plans[index];
       // this.setTitle(plan.title);
        return plan;
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