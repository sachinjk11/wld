import { Plan } from './plan.model';
import { Subject } from 'rxjs/Subject';
import { isDevMode, Injectable } from '@angular/core';

@Injectable()
export class PlanService
{
    plans : Plan[] = [
      new Plan(
           'test my diet plan 1',
           'https://www.merrchant.com/daily/2/diet-plans/media/d11.jpg',
           'its 1 best plan for fat loss if follow the rule 1  you get resultits best plan for 1 fat loss if follow the rule you get <b> 1 resultits</b> best plan for fat loss if follow the rule you get result',
           'its best plan for 1 fat loss if follow the rule you get <b> 1 resultits</b> best plan for fat loss if follow the rule you get result'),
      new Plan(
            'test my diet plan 2',
            'https://www.merrchant.com/daily/2/diet-plans/media/d11.jpg',
            'its 2 best plan for fat loss if follow the rule 2  you get result',
            'its best plan for 2 fat loss if follow the rule you get <b> 2 resultits</b> best plan for fat loss if follow the rule you get result'),
      new Plan(
            'test my diet plan 3',
            'https://www.merrchant.com/daily/2/diet-plans/media/d11.jpg',
           'its 3 best plan for fat loss if follow the rule 3  you get result',
            'its best plan for 3 fat loss if follow the rule you get <b> 3 resultits</b> best plan for fat loss if follow the rule you get result'),
      new Plan(
          'test my diet plan 4',
          'https://www.merrchant.com/daily/2/diet-plans/media/d11.jpg',
          'its 4 best plan for fat loss if follow the rule 4  you get result',
          'its best plan for 4 fat loss if follow the rule you get <b> 4 resultits</b> best plan for fat loss if follow the rule you get result'),
        new Plan(
        'test my diet plan 5',
        'https://www.merrchant.com/daily/2/diet-plans/media/d11.jpg',
        'its 5 best plan for fat loss if follow the rule 5  you get result',
        'its best plan for 5 fat loss if follow the rule you get <b> 5 resultits</b> best plan for fat loss if follow the rule you get result'),
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