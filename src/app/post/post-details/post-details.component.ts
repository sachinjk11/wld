import { Component, OnInit } from '@angular/core';
import { Post } from '../posts.model';
import { PostService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  id: number;

  constructor(private postservice : PostService, private router : Router, private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.post = this.postservice.getByIndex(this.id);
        }
      );
      this.post = this.postservice.getByIndex(this.id);
      this.postservice.postSelected.next(true);
      console.log('---ngOnInit details - '+this.postservice.postSelected);
      
  }

  onEdit() {
    //this.router.navigate(['edit'], {relativeTo: this.route});
     this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDelete()
  {
    this.postservice.delete(this.id);
    this.postservice.postSelected.next(false);
    this.router.navigate(['/weight-loss-Tips']);
  }
}
