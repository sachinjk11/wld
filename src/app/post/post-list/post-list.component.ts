import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts.service';
import { Post } from '../posts.model';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 posts : Post[];
 subscription1 : Subscription;
 subscription2 : Subscription;
 postSelected : boolean;

  constructor(private postservice : PostService, private router : Router, private route : ActivatedRoute, public authService: AuthService,
    private dataStorageService : DataStorageService, private postService : PostService) { 
    //this.postservice.postSelected.next(false);
  }

  ngOnInit() {

    this.subscription1 =  this.postservice.postUpdated.subscribe(
    (posts : Post[])=>{ this.posts = posts});

   this.subscription2 =  this.postservice.postSelected.subscribe(
    (postSelected : boolean)=>{ this.postSelected = postSelected});

    if (this.router.url.split("/").length > 3)
    {
      this.dataStorageService.getposts();
      this.postService.postSelected.next(true);
      console.log(this.postSelected);
      console.log(this.posts);
    }
    else
    {
        this.posts = this.postservice.get();
        this.postservice.postSelected.next(false);
    } 
    
      
     
  }


  
    onNewPost() {
    this.postservice.postSelected.next(true);
    this.router.navigate(['new'], {relativeTo: this.route});

  }

  onClickback(){
    this.postservice.postSelected.next(false);
    this.router.navigate(['./'], {relativeTo: this.route});
   
  }
  new()
  { 
    this.router.navigate(['new'], {relativeTo: this.route});   
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
