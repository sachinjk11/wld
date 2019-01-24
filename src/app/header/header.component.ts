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
   if(!isDevMode())
     this.onFetchData();
  }
  onSaveData() {
    // this.dataStorageService.storeRecipes().subscribe(
    //     (response: Response) => {
    //       console.log('Recipes----'+response);
    //     }
    //   );
    this.dataStorageService.storePosts().subscribe(
        (response: Response) => {
          console.log('Posts----'+response);
        }
      );
  }

  onFetchData() {
  //  this.dataStorageService.getRecipes();
    this.dataStorageService.getposts();
  }

  onLogout() {
    this.authService.logout();
  }
}
