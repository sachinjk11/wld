import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.model';
import { PlanService } from '../plans.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {

  plan : Plan ;
  id: number;

  constructor(private planService : PlanService, private router : Router, private route : ActivatedRoute,public authService: AuthService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.plan = this.planService.getByIndex(this.id);
        }
      );
      this.plan = this.planService.getByIndex(this.id);
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
