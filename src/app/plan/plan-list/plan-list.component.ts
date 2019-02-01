import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.model';
import { Subscription } from 'rxjs/Subscription';
import { PlanService } from '../plans.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {


  plans : Plan[];
  subscription1 : Subscription;
  subscription2 : Subscription;
  planSelected : boolean;
 
   constructor(private planService : PlanService, private router : Router, private route : ActivatedRoute, public authService: AuthService,
     private dataStorageService : DataStorageService) { 
  
   }
 
   ngOnInit() {
        
          this.subscription1 =  this.planService.planUpdated.subscribe(
          (plans : Plan[])=>{ this.plans = plans});
      
          this.subscription2 =  this.planService.planSelected.subscribe(
          (planSelected : boolean)=>{ this.planSelected = planSelected});
      
          if (typeof this.planSelected == 'undefined')
          {
            this.dataStorageService.getPlans();
            this.planService.planSelected.next(true);
          }
          else
          {
               this.plans = this.planService.get();
              this.planService.planSelected.next(false);
          } 
          
          console.log('this.planSelected--'+this.planSelected);
          

   }
     onNewPlan() {
     this.planService.planSelected.next(true);
     this.router.navigate(['new'], {relativeTo: this.route});
 
   }
 
   onClickback(){
     this.planService.planSelected.next(false);
     this.router.navigate(['../'], {relativeTo: this.route});
    
   }
 
   ngOnDestroy() {
     this.subscription1.unsubscribe();
     this.subscription2.unsubscribe();
   }
 

}
