import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PostService } from '../posts.service';
import { Post } from '../posts.model';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnChanges {
 posts : Post[];
 subscription1 : Subscription;
 subscription2 : Subscription;
 postSelected : boolean;

  constructor(private postservice : PostService, private router : Router, private route : ActivatedRoute) { 
    this.postservice.postSelected.next(false);
    console.log('constructor PostListComponent');  
  }

  ngOnInit() {
    this.subscription1 =  this.postservice.postUpdated.subscribe(
    (posts : Post[])=>{ this.posts = posts});

   this.subscription2 =  this.postservice.postSelected.subscribe(
    (postSelected : boolean)=>{ this.postSelected = postSelected});

    this.posts = this.postservice.get();
    this.postservice.postSelected.next(false);
    console.log('--ngOnInit--PostListComponent');    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('--ngOnChanges--PostListComponent');  
    console.log(changes);
    
  }

  
    onNewPost() {
    this.postservice.postSelected.next(true);
    this.router.navigate(['new'], {relativeTo: this.route});

  }

  onClickback(){
    this.postservice.postSelected.next(false);
    this.router.navigate([''], {relativeTo: this.route});
   
  }
  new()
  {
    console.log('---------new1'+this.router);
    this.router.navigate(['new'], {relativeTo: this.route});
    console.log('---------new2'+this.route);
    
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
