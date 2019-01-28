import { Component, OnInit, isDevMode } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService) {
  }

  ngOnInit() {
 //if(!isDevMode())
     this.onFetchData();
  }
  onSaveData() {
  
    this.dataStorageService.storePosts().subscribe(
        (response: Response) => {
          console.log('Posts----'+response);
        }
      );
      this.dataStorageService.storePlans().subscribe(
        (response: Response) => {
          console.log('Plans----'+response);
        }
      );
  }

  onFetchData() {
 
    this.dataStorageService.getposts();
    this.dataStorageService.getPlans();
  }

  onLogout() {
    this.authService.logout();
  }
}
