import { Component, OnInit, isDevMode } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { PlanService } from '../plan/plans.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService, private planservice : PlanService,
              private route : ActivatedRoute, private router : Router) {
  }

  ngOnInit() {
 //if(!isDevMode())
     this.onFetchData();
  }
  // onSaveData() {
  
  //   this.dataStorageService.storePosts().subscribe(
  //       (response: Response) => {
  //         console.log('Posts----'+response);
  //       }
  //     );
  //     this.dataStorageService.storePlans().subscribe(
  //       (response: Response) => {
  //         console.log('Plans----'+response);
  //       }
  //     );
  // }

  onFetchData() {
 
    this.dataStorageService.getposts();
    this.dataStorageService.getPlans();
  }

  onLogout() {
    this.authService.logout();
  }

  onClickPlan()
  {
    this.planservice.planSelected.next(false);
    this.router.navigate(['/weight-loss-diet-plans'], {relativeTo: this.route});
  }
}
