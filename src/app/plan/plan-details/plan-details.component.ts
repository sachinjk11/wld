import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.model';
import { PlanService } from '../plans.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {

  plan : Plan ;
  id: number;
  subscription1 : Subscription;

  constructor(private planService : PlanService, private router : Router, private route : ActivatedRoute,public authService: AuthService) {
  }

  ngOnInit() {

    this.route.params .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        
          this.plan = this.planService.getByIndex(this.id);
          this.subscription1 =  this.planService.planUpdated.subscribe(
            (plans : Plan[])=>{ this.plan = plans[this.id], console.log('details page  data change here '+this.id)   });
        }
      );

     // this.plan = this.planService.getByIndex(this.id);
      this.planService.planSelected.next(true);
  }

  onEdit() {
     this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDelete()
  {
    this.planService.delete(this.id);
    this.planService.planSelected.next(false);
    this.router.navigate(['/weight-loss-Tips']);
  }

}
