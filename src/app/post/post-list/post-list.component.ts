import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts.service';
import { Post } from '../posts.model';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 posts : Post[];
 subscription : Subscription;

  constructor(private postservice : PostService, private router : Router, private route : ActivatedRoute) { 

  }

  ngOnInit() {
 this.subscription =  this.postservice.postUpdated.subscribe(
   (posts : Post[])=>{ this.posts = posts});

   this.posts = this.postservice.get();
  }

  
    onNewPost() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  new()
  {
    console.log('---------new1'+this.router);
    this.router.navigate(['new'], {relativeTo: this.route});
    console.log('---------new2'+this.route);
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
